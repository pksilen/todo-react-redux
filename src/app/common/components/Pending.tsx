import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
};

export const Pending = ({ children, className, fallback }: Props) => (
  <section className={className}>{fallback || children}</section>
);
