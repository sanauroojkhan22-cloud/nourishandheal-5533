import { useMutation, useQuery } from "@tanstack/react-query";
import { orpc } from "../lib/api";
export const useSubscribe = () =>
  useMutation(orpc.wellness.subscribe.mutationOptions());
export const useContact = () =>
  useMutation(orpc.wellness.contact.mutationOptions());
export const useCreateOrder = () =>
  useMutation(orpc.wellness.createOrder.mutationOptions());
export const useHistory = (enabled: boolean) =>
  useQuery(orpc.wellness.history.queryOptions({ enabled }));
