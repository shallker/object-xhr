module.exports = ObjectXHR;

function ObjectXHR() {
  var xhr = new XHR;

  this.xhr = xhr;
}

function XHR() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP")
  } else {
    throw new Error("Cannot creat a XHR instance");
  }
}

function prototypeProperty(name, defines) {
  Object.defineProperty(ObjectXHR.prototype, name, defines);
}

prototypeProperty('onabort', {
  get: function () {
    return this.xhr.onabort;
  },

  set: function (value) {
    return this.xhr.onabort = value;
  }
});

prototypeProperty('onerror', {
  get: function () {
    return this.xhr.onerror;
  },

  set: function (value) {
    return this.xhr.onerror = value;
  }
});

prototypeProperty('onload', {
  get: function () {
    return this.xhr.onload;
  },

  set: function (value) {
    return this.xhr.onload = value;
  }
});

prototypeProperty('onloadend', {
  get: function () {
    return this.xhr.onloadend;
  },

  set: function (value) {
    return this.xhr.onloadend = value;
  }
});

prototypeProperty('onloadstart', {
  get: function () {
    return this.xhr.onloadstart;
  },

  set: function (value) {
    return this.xhr.onloadstart = value;
  }
});

prototypeProperty('onprogress', {
  get: function () {
    return this.xhr.onprogress;
  },

  set: function (value) {
    return this.xhr.onprogress = value;
  }
});

prototypeProperty('onreadystatechange', {
  get: function () {
    return this.xhr.onreadystatechange;
  },

  set: function (value) {
    return this.xhr.onreadystatechange = value;
  }
});

prototypeProperty('ontimeout', {
  get: function () {
    return this.xhr.ontimeout;
  },

  set: function (value) {
    return this.xhr.ontimeout = value;
  }
});

prototypeProperty('readyState', {
  get: function () {
    return this.xhr.readyState;
  }
});

prototypeProperty('response', {
  get: function () {
    return this.xhr.response;
  }
});

prototypeProperty('responseText', {
  get: function () {
    return this.xhr.responseText;
  }
});

prototypeProperty('responseType', {
  get: function () {
    return this.xhr.responseType;
  }
});

prototypeProperty('responseXML', {
  get: function () {
    return this.xhr.responseXML;
  }
});

prototypeProperty('status', {
  get: function () {
    return this.xhr.status;
  }
});

prototypeProperty('statusText', {
  get: function () {
    return this.xhr.statusText;
  }
});

prototypeProperty('timeout', {
  get: function () {
    return this.xhr.timeout;
  }
});

prototypeProperty('upload', {
  get: function () {
    return this.xhr.upload;
  }
});

prototypeProperty('withCredentials', {
  get: function () {
    return this.xhr.withCredentials;
  }
});

/** XHLHttpRequest.__proto__ */

prototypeProperty('DONE', {
  get: function () {
    return this.xhr.DONE;
  }
});

prototypeProperty('HEADERS_RECEIVED', {
  get: function () {
    return this.xhr.HEADERS_RECEIVED;
  }
});

prototypeProperty('LOADING', {
  get: function () {
    return this.xhr.LOADING;
  }
});

prototypeProperty('OPENED', {
  get: function () {
    return this.xhr.OPENED;
  }
});

prototypeProperty('UNSENT', {
  get: function () {
    return this.xhr.UNSENT;
  }
});

ObjectXHR.prototype.addEventListener = function () {
  return this.xhr.addEventListener.apply(this.xhr, arguments);
}

ObjectXHR.prototype.removeEventListener = function () {
  return this.xhr.removeEventListener.apply(this.xhr, arguments);
}

ObjectXHR.prototype.abort = function () {
  return this.xhr.abort.apply(this.xhr, arguments);
}

ObjectXHR.prototype.getAllResponseHeaders = function () {
  return this.xhr.getAllResponseHeaders.apply(this.xhr, arguments);
}

ObjectXHR.prototype.getResponseHeader = function () {
  return this.xhr.getResponseHeader.apply(this.xhr, arguments);
}

ObjectXHR.prototype.open = function () {
  return this.xhr.open.apply(this.xhr, arguments);
}

ObjectXHR.prototype.overrideMimeType = function () {
  return this.xhr.overrideMimeType.apply(this.xhr, arguments);
}

ObjectXHR.prototype.send = function () {
  return this.xhr.send.apply(this.xhr, arguments);
}

ObjectXHR.prototype.setRequestHeader = function () {
  return this.xhr.setRequestHeader.apply(this.xhr, arguments);
}
