export interface LegalConfig {
  editorName: string;
  hostName: string;
  hostAddress: string;
}

export function getLegalConfig(siteName: string): LegalConfig {
  return {
    editorName:
      process.env.NEXT_PUBLIC_LEGAL_EDITOR_NAME?.trim() || siteName,
    hostName: process.env.NEXT_PUBLIC_LEGAL_HOST_NAME?.trim() || '',
    hostAddress: process.env.NEXT_PUBLIC_LEGAL_HOST_ADDRESS?.trim() || '',
  };
}
