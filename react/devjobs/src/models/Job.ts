export type Job = {
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements: Requirements;
    role: Role;
};

type Requirements = {
    content: string;
    items: string[];
};

type Role = {
    content: string;
    items: string[];
};
