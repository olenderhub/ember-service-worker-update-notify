import Component from '@glimmer/component'
import { inject as service } from '@ember/service'
import { tracked } from '@glimmer/tracking'

export default class ServiceWorkerUpdateNotify extends Component {
  @service serviceWorkerUpdateNotify

  @tracked hasUpdate = false

  constructor() {
    super(...arguments)

    this._updateHandler = () => (this.hasUpdate = true)
    this.serviceWorkerUpdateNotify.on('update', this._updateHandler)
  }

  willDestroy() {
    super.willDestroy(...arguments)
    this.serviceWorkerUpdateNotify.off('update', this._updateHandler)
  }
}
