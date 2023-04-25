// - MARK: Config
export function configuration(config: any) {
  return {
    organizationId: '',
    apiKey: '',
    BASE_ISSUANCE_URL: '',
    BASE_VERIFIER_URL: '',
    tenantId: '',
    ...config,
  };
}

// - MARK: DID
export function generateDID() {
  return {
    DID: '',
    privateKey: '',
    publicKey: '',
    signature: '',
  };
}

// - MARK: Issuance
export function getManifest() {
  return {
    id: 1,
    credentialName: 'BBL Staff Card',
  };
}

export function createIssuanceRequest() {
  return {
    issuance_id: 1,
    credentialName: 'BBL Staff Card',
  };
}

export function issueVC() {
  return {
    issuance_vc_id: 1,
    credentialName: 'BBL Staff Card',
  };
}

// - MARK: Verifier
export function createPresentationRequest() {
  return {
    presentation_id: 1,
    credentialName: '',
  };
}

export function verifyPresentation() {
  return {
    verify_id: 1,
    credentialName: '',
  };
}

// - MARK: VC Management
export function getVCByDeviceID(id: string) {
  return {
    deviceID: id,
    credentialName: '',
  };
}

export function deleteCredentail(id: string) {
  return {
    id,
    status: 'delete success.',
  };
}

export function reissueCredential(id: string) {
  return {
    reissueId: id,
  };
}

// - MARK: credentials
export function issuanceLogHistory(id: string) {
  return {
    issuanceLogId: id,
    status: 'delete success.',
  };
}

export function verifyLogHistory(id: string) {
  return {
    verifyLogId: id,
  };
}
