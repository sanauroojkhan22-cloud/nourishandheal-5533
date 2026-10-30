from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from pathlib import Path
import textwrap
out=Path('packages/web/public/downloads')
resources=[
('pcos-symptom-tracker','PCOS Symptom Tracker',['Date / cycle day','Symptoms noticed','Energy / sleep','Questions for clinician']),
('bloating-trigger-tracker','Bloating Trigger Tracker',['Date / time','Meal & drinks','Symptoms / timing','Bowel habits / notes']),
('hydration-tracker','Hydration Tracker',['Date','Drinks / timing','Activity / weather','How I felt']),
('daily-wellness-checklist','Daily Wellness Checklist',['Date','Meals / variety','Movement / rest','One daily intention']),
('cycle-tracker','Cycle Tracker',['Date','Cycle / flow notes','Symptoms','Questions for clinician']),
('healthy-habit-tracker','Healthy Habit Tracker',['Day','Habit 1','Habit 2','Habit 3 / note']),
('supplement-questions-checklist','Supplement Questions Checklist',[]) ]
for slug,title,cols in resources:
 c=canvas.Canvas(str(out/(slug+'.pdf')),pagesize=(595,842))
 c.setFillColor(HexColor('#FBF8F2'));c.rect(0,0,595,842,fill=1,stroke=0)
 c.setFillColor(HexColor('#243B2F'));c.setFont('Times-Roman',23);c.drawString(40,783,'Nourish & Heal')
 c.setFont('Helvetica',8);c.drawString(40,763,'BY DR. SANA | UNDERSTAND. NOURISH. HEAL.')
 c.setFont('Times-Roman',26);c.drawString(40,711,title)
 c.setFont('Helvetica',10);c.setFillColor(HexColor('#756E63'))
 note='A reusable observation tool. Keep notes brief and take persistent concerns to your clinician.'
 if slug=='cycle-tracker': note='For recording patterns only. Not a contraception, ovulation or fertility prediction tool.'
 if slug=='hydration-tracker':note='Fluid needs vary. Follow your clinician’s advice if you have a fluid restriction.'
 if slug=='bloating-trigger-tracker':note='Observe patterns without broad food elimination. New or severe symptoms need assessment.'
 for i,line in enumerate(textwrap.wrap(note,85)):c.drawString(40,682-i*15,line)
 c.setStrokeColor(HexColor('#D4C7AE'));c.setLineWidth(.6)
 if cols:
  y=625;w=515/4
  for i,h in enumerate(cols):c.setFont('Helvetica',8);c.drawString(46+i*w,y,h)
  c.line(40,y-13,555,y-13)
  for row in range(8):c.line(40,y-13-row*55,555,y-13-row*55)
  for i in range(5):c.line(40+i*w,y+13,40+i*w,y-398)
 else:
  qs=['What is the exact ingredient, form and quantity per serving?','Why am I considering it? Is there evidence relevant to my situation?','Could it interact with my medicines or existing supplements?','Is it appropriate for my age, pregnancy or breastfeeding status?','Who makes it, and is there genuine independent quality testing?','What risks, side effects or stop-use signs should I know?','How will I review whether I still need it with my pharmacist or clinician?']
  for i,q in enumerate(qs):
   y=620-i*60;c.rect(42,y-4,9,9);c.setFont('Helvetica',10)
   for j,line in enumerate(textwrap.wrap(q,80)):c.drawString(65,y-j*15,line)
 c.setFont('Helvetica',9);c.drawString(40,147,'Notes / questions:');c.line(40,122,555,122);c.line(40,101,555,101)
 c.setFont('Helvetica',7)
 for i,line in enumerate(textwrap.wrap('General education only. Not diagnosis or medical advice. These resources do not replace professional care. For questions: nourishandhealbysana@gmail.com',115)):c.drawString(40,66-i*11,line)
 c.save()
print('Created seven one-page printable resources.')
