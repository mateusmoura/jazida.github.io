import PubSubJS from 'pubsub-js';

export default class ErrorsBuild {
  ErrorPublish (resp) {
    // for (var i = 0; i < resp.errors.length; i++) {
    //   let error = resp.errors[i];

    //   PubSubJS.publish('validation-error', error);
    // }
    PubSubJS.publish('validation-error', resp);
  }
}
