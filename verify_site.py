import asyncio,json
from playwright.async_api import async_playwright
async def main():
 async with async_playwright() as p:
  browser=await p.chromium.launch(executable_path='/usr/bin/google-chrome',headless=True,args=['--no-sandbox'])
  page=await browser.new_page(viewport={'width':1440,'height':1050})
  errors=[]
  page.on('pageerror',lambda e: errors.append(str(e)))
  await page.goto('http://localhost:4200',wait_until='networkidle')
  await page.screenshot(path='home-full.png',full_page=True)
  routes=['/about','/founder','/wellness','/wellness/womens','/shop','/coming-soon','/coming-soon/bloat-ease','/bundles','/journal','/journal/pcos-without-the-noise','/resources','/quality','/faq','/contact','/cart','/checkout','/account','/legal/privacy','/legal/terms','/legal/refunds','/legal/shipping','/legal/product-safety','/legal/disclaimer']
  results=[]
  for r in routes:
   await page.goto('http://localhost:4200'+r,wait_until='networkidle')
   results.append({'route':r,'h1':await page.locator('h1').first.inner_text(),'overflow':await page.evaluate('document.documentElement.scrollWidth>innerWidth')})
  await page.goto('http://localhost:4200/shop/digital/pcos-wellness-guide',wait_until='networkidle')
  await page.get_by_role('button',name='Buy Now — preview checkout').click()
  await page.get_by_role('link',name='Continue to demo checkout',exact=True).click()
  await page.locator('input[name=name]').fill('Preview Tester')
  await page.locator('input[name=email]').fill('preview-test@example.com')
  await page.locator('input[type=checkbox]').check()
  await page.get_by_role('button',name='Place demo order — no payment').click()
  await page.wait_for_url('**/order/**')
  order=await page.locator('.order-id').inner_text()
  await page.goto('http://localhost:4200/resources',wait_until='networkidle')
  await page.get_by_role('button',name='Get the free resource').first.click()
  link=await page.get_by_role('link',name='Download free PDF').get_attribute('href')
  response=await page.request.get('http://localhost:4200'+link)
  pdf=(await response.body())[:4]
  await page.goto('http://localhost:4200/contact',wait_until='networkidle')
  await page.locator('input[name=name]').fill('Preview tester')
  await page.locator('input[name=email]').fill('preview-test@example.com')
  await page.locator('textarea').fill('Preview verification message. No reply required.')
  await page.locator('input[type=checkbox]').check()
  await page.get_by_role('button',name='Send message',exact=True).click()
  await page.get_by_role('heading',name='Your message has been saved.').wait_for()
  mobile=await browser.new_page(viewport={'width':390,'height':844},is_mobile=True,device_scale_factor=1)
  for r in ['/','/shop','/founder','/coming-soon/bloat-ease','/resources','/checkout']:
   await mobile.goto('http://localhost:4200'+r,wait_until='networkidle')
   results.append({'mobile':r,'overflow':await mobile.evaluate('document.documentElement.scrollWidth>innerWidth')})
   if r=='/':await mobile.screenshot(path='home-mobile.png',full_page=True)
  await mobile.goto('http://localhost:4200',wait_until='networkidle')
  await mobile.get_by_role('button',name='Open navigation',exact=True).click()
  await mobile.locator('.mobile-menu').get_by_role('link',name='Quality',exact=False).click()
  await mobile.wait_for_url('**/quality')
  print(json.dumps({'routes':results,'errors':errors,'demo_order':order,'resource_pdf':str(pdf),'contact':'stored','mobile_menu':'passed'},indent=2))
  await browser.close()
asyncio.run(main())
