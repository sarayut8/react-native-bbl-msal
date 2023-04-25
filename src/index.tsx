// - MARK: Config
export function setConfig(config) {
  return ""
}

// - MARK: DID
export function generateDID() {
  return {
    id: 1,
    name: '',
  };
}

export function getDID() {
  return {
    name: '',
  };
}


// - MARK: Manifest
export function getManifest() {
  return {
    id: 1,
    credential_name: 'BBL Staff Card',
  };
}


// - MARK: credentials
export function getCredentials() {
  return {
    credentials_name: '',
  };
}

export function getCredentialById(id: string) {
  return {
    id: id,
    credentials_name: '',
  };
}
