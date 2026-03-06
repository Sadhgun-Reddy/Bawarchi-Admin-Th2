export interface NavItem {
    label: string;
    icon: string;
    path: string;
    badge?: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}
