export class Category {
    public name: string | undefined;
    public files: string[] | undefined;
    public categories: Category[] | undefined;
    public hidden: boolean = false;
}

export function updateHidden(category: Category, searchParam: string): boolean {
    let canHide: boolean = true;
    category.categories?.forEach(c => {
        if (!updateHidden(c, searchParam)) canHide = false;
    })

    category.files?.forEach(f => {
        if (f.includes(searchParam)) canHide = false
    })

    category.hidden = canHide;
    return category.hidden;
}

export function formatCategoryName(name: string): string {
    return name[0].toUpperCase() + name.substring(1);
}

export function formatFileName(name: string): string {
    return name.split('_').map(s => s[0].toUpperCase() + s.substring(1)).join(' ');
}
