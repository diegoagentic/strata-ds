import { Heading, Subheading } from '@/components/application-ui/heading';

export interface CompanyGreetingProps {
  heading: string;
  subheading: string;
}

export function CompanyGreeting({ heading, subheading }: CompanyGreetingProps) {
  return (
    <>
      <Heading
        level={1}
        className="font-bold text-[30px] leading-[36px] tracking-[-0.75px] align-middle"
      >
        {heading}
      </Heading>
      <Subheading
        level={2}
        className="font-medium text-base leading-6 align-middle font-[Inter]"
      >
        {subheading}
      </Subheading>
    </>
  );
}
