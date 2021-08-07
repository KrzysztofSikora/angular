import { Injectable } from '@angular/core';

import { endpoints } from 'src/endpoints';

/**
 * Service to translate url name create from params for correct endpoint path.
 */
@Injectable({ providedIn: 'root' })
export class EndpointService {
  private config = 'http://localhost:3000/api/';

  /**
   *
   * @param urlName - Name of url basiclly like service's method name. In kebab-case notation.
   * @returns {string} - Full path of endpoint.
   */
  public getUrlByMethodName(urlName: string): string {
    return `${this.config}${
      endpoints.find((endpoint) => endpoint.url === urlName)?.path
    }`;
  }
}
