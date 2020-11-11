export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
  sectionModules: SectionModulesProps;
  sectionAgenda: SectionAgendaProps;
  pricingBox: PricingBoxProps;
  sectionAboutUs: SectionAboutUsProps;
  sectionReviews: SectionReviewsProps;
  sectionFaq: SectionFaqProps;
};

export type LogoProps = {
  alternativeText: string;
  url: string;
};

export type HeaderProps = {
  title: string;
  description: string;
  button?: {
    label: string;
    url: string;
  };
  image: {
    alternativeText: string;
    url: string;
  };
};

export type SectionAboutProjectProps = {
  title: string;
  description: string;
  image: LogoProps;
};

export type SectionTechProps = {
  title: string;
  techIcons: TechIconsProps[];
};

export type TechIconsProps = {
  icon: LogoProps;
  title: string;
};

export type SectionConceptsProps = {
  title: string;
  concepts: Array<{
    title: string;
  }>;
};

export type SectionModulesProps = {
  title: string;
  modules: Array<{
    title: string;
    subtitle: string;
    description: string;
  }>;
};

export type SectionAgendaProps = {
  title: string;
  description: string;
};

export type PricingBoxProps = {
  totalPrice: number;
  numberInstallments: number;
  priceInstallment: number;
  benefits: string;
  button: {
    label: string;
    url: string;
  };
};

export type SectionAboutUsProps = {
  title: string;
  authors: Array<Author>;
};

export type Author = {
  name: string;
  role: string;
  photo: LogoProps;
  description: string;
  socialLinks: Array<SocialLink>;
};

export type SocialLink = {
  title: string;
  url: string;
};

export type SectionReviewsProps = {
  title: string;
  reviews: Review[];
};

export type Review = {
  name: string;
  text: string;
  photo: LogoProps;
};

export type SectionFaqProps = {
  title: string;
  questions: {
    question: string;
    answer: string;
  };
};
