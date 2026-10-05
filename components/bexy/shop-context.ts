'use client';
import {createContext,useContext} from 'react';
import type {Product,StoreData,CartItem} from '@/lib/catalog';

export type ShopContextValue={
  data:StoreData;
  ready:boolean;
  busy:boolean;
  save:(s:StoreData)=>Promise<boolean>;
  add:(i:CartItem)=>Promise<void>;
  favorite:(id:string)=>void;
  bag:(v:boolean)=>void;
  view:(p:Product)=>void;
};

export const ShopContext=createContext<ShopContextValue|null>(null);

export function useShop(){
  const ctx=useContext(ShopContext);
  if(!ctx){
    throw new Error('useShop must be used within ShopProvider');
  }
  return ctx;
}
