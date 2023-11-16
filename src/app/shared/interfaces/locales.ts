export interface ILocale {
    code: string,
    description: string
}

export const DefaultLocales : ILocale[] = [
    { code: 'pt', description: 'Português (Brasil)' },
    { code: 'en-US', description: 'English (US)' },
    { code: 'es', description: 'Español' },
    { code: 'es-MX', description: 'Español (MX)' },
    { code: 'es-AR', description: 'Español (AR)' }
];
