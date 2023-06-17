import type { ReactNode, ComponentPropsWithoutRef, ElementType, PropsWithChildren, ComponentPropsWithRef } from 'react';

type TTypographyType =
  | 'h1'
  | 'h2'
  | 'text-l'
  | 'text-m'
  | 'text-s'
  | 'text-s-bold'
  | 'label'
  | 'label-s'
  | 'label-s-bold';

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends ElementType,
  Props = {}
> = PropsWithChildren<Props & AsProp<C>> &
Omit<ComponentPropsWithoutRef<C>,
PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>["ref"];

export type TTypographyProps<C extends ElementType> =
PolymorphicComponentPropWithRef<
  C,
  { typographyType?: TTypographyType | 'text-m' }
>
