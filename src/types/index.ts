export type SafetyStatus = 'Safe' | 'Suspicious' | 'Unsafe';

export interface UrlScanResponse {
  status: SafetyStatus;
  details?: string;
  score?: number;
  // Add more fields as needed based on the API response
}

export interface NavigationRequest {
  url: string;
  tabId: number;
  frameId: number;
}

export interface SafetyVerdict {
  url: string;
  status: SafetyStatus;
  details?: string;
  timestamp: number;
}

export interface MessageToBackground {
  type: 'SCAN_URL' | 'PROCEED_NAVIGATION' | 'CANCEL_NAVIGATION';
  payload: unknown;
}

export interface MessageToContent {
  type: 'SHOW_SAFETY_DIALOG' | 'HIDE_SAFETY_DIALOG';
  payload: unknown;
}

export interface MessageToPopup {
  type: 'SAFETY_RESULT';
  payload: SafetyVerdict;
} 