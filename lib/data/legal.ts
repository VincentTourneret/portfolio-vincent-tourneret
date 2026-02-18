export interface LegalConfig {
  editorName: string;
  hostName: string;
  hostAddress: string;
}

/** Hébergeur par défaut : OVH (valeurs typiques pour la France) */
const DEFAULT_HOST_NAME = "OVH SAS";
const DEFAULT_HOST_ADDRESS = "2 rue Kellermann, 59100 Roubaix, France";

export function getLegalConfig(siteName: string): LegalConfig {
  return {
    editorName:
      process.env.NEXT_PUBLIC_LEGAL_EDITOR_NAME?.trim() || siteName,
    hostName:
      process.env.NEXT_PUBLIC_LEGAL_HOST_NAME?.trim() || DEFAULT_HOST_NAME,
    hostAddress:
      process.env.NEXT_PUBLIC_LEGAL_HOST_ADDRESS?.trim() || DEFAULT_HOST_ADDRESS,
  };
}
