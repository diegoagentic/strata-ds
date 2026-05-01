import type { ReactNode } from 'react';
import { Heading, Subheading } from '@/components/application-ui/heading';

export interface PageHeaderProps {
  heading: ReactNode;
  subheading?: ReactNode;
}

export function PageHeader({ heading, subheading }: PageHeaderProps) {
  return (
    <>
      <Heading
        level={1}
        className="font-bold text-[30px] leading-[36px] tracking-[-0.75px] align-middle"
      >
        {heading}
      </Heading>
      {subheading != null && subheading !== '' && (
        <Subheading
          level={2}
          className="font-medium text-base leading-6 align-middle font-[Inter] text-muted-foreground"
        >
          {subheading}
        </Subheading>
      )}
    </>
  );
}
