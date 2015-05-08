Ember.TEMPLATES["_footer"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("footer");
      dom.setAttribute(el1,"class","row text-right");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","column");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("small");
      var el4 = dom.createTextNode("\n      Visit me at ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","http://vikingglory.com/");
      var el5 = dom.createTextNode("vikingglory.com");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      return fragment;
    }
  };
}()));
Ember.TEMPLATES["_header"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Simple Responsive Templates Demo");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("header");
      dom.setAttribute(el1,"class","row");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","column");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h1");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("hr");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1]),1,1);
      block(env, morph0, context, "link-to", ["index"], {}, child0, null);
      return fragment;
    }
  };
}()));
Ember.TEMPLATES["_side-nav"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h4");
      var el2 = dom.createTextNode("Menu");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      dom.setAttribute(el1,"class","no-bullet");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element0 = dom.childAt(fragment, [2]);
      var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
      var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
      var morph2 = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
      var morph3 = dom.createMorphAt(dom.childAt(element0, [7]),1,1);
      inline(env, morph0, context, "link-to", ["Home", "index"], {"class": "side-nav-link"});
      inline(env, morph1, context, "link-to", ["Media Statuses", "statuses"], {"class": "side-nav-link"});
      inline(env, morph2, context, "link-to", ["Layouts", "layouts"], {"class": "side-nav-link"});
      inline(env, morph3, context, "link-to", ["Content Swapping", "content"], {"class": "side-nav-link"});
      return fragment;
    }
  };
}()));
Ember.TEMPLATES["content"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("main");
      dom.setAttribute(el1,"class","row");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","large-3 columns");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","large-13 columns");
      var el3 = dom.createTextNode(" \n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","column");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h1");
      dom.setAttribute(el5,"class","h3");
      var el6 = dom.createTextNode("Content Swapping");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("ul");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      var el7 = dom.createTextNode("Responsive Images");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      var el7 = dom.createTextNode("Dropdowns for Tabs");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(dom.childAt(fragment, [2, 1]),1,1);
      var morph2 = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      inline(env, morph0, context, "partial", ["header"], {});
      inline(env, morph1, context, "partial", ["side-nav"], {});
      inline(env, morph2, context, "partial", ["footer"], {});
      return fragment;
    }
  };
}()));
Ember.TEMPLATES["index"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("          ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","icon statuses h2");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n          ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n          Media Statuses\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("          ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","icon layouts h2");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n          ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n          Layouts\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("          ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","icon content h2");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n          ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n          Content Swapping\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("main");
      dom.setAttribute(el1,"class","row");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","column");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h1");
      dom.setAttribute(el3,"class","h3");
      var el4 = dom.createTextNode("Welcome");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("p");
      var el4 = dom.createTextNode("\n      This demo is meant to show how easily you can setup responsive templates with\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","http://emberjs.com/");
      var el5 = dom.createTextNode("Ember.js");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(". This is ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("em");
      var el5 = dom.createTextNode("not");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" intended to advocate for a\n      JavaScript-based approach over tried and true Responsive Web Design (RWD) techniques. The goal\n      of this demo is to give you another tool to put in your RWD belt.\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("ul");
      dom.setAttribute(el3,"class","small-block-grid-1 medium-block-grid-3 text-center");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("li");
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("li");
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("li");
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element0 = dom.childAt(fragment, [2, 1, 5]);
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
      var morph2 = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
      var morph3 = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
      var morph4 = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      inline(env, morph0, context, "partial", ["header"], {});
      block(env, morph1, context, "link-to", ["statuses"], {"class": "block panel"}, child0, null);
      block(env, morph2, context, "link-to", ["layouts"], {"class": "block panel"}, child1, null);
      block(env, morph3, context, "link-to", ["content"], {"class": "block panel"}, child2, null);
      inline(env, morph4, context, "partial", ["footer"], {});
      return fragment;
    }
  };
}()));
Ember.TEMPLATES["layouts"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("main");
      dom.setAttribute(el1,"class","row");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","large-3 columns");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","large-13 columns");
      var el3 = dom.createTextNode(" \n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","column");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h1");
      dom.setAttribute(el5,"class","h3");
      var el6 = dom.createTextNode("Layouts");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("ul");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      var el7 = dom.createTextNode("Left Title");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      var el7 = dom.createTextNode("Split Sidebar");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(dom.childAt(fragment, [2, 1]),1,1);
      var morph2 = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      inline(env, morph0, context, "partial", ["header"], {});
      inline(env, morph1, context, "partial", ["side-nav"], {});
      inline(env, morph2, context, "partial", ["footer"], {});
      return fragment;
    }
  };
}()));
Ember.TEMPLATES["statuses"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("main");
      dom.setAttribute(el1,"class","row");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","large-3 columns");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","large-13 columns");
      var el3 = dom.createTextNode(" \n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","column");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h1");
      dom.setAttribute(el5,"class","h3");
      var el6 = dom.createTextNode("Media Statuses");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("\n          The table below shows the status of media queries built into\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"href","http://foundation.zurb.com/docs/media-queries.html");
      var el7 = dom.createTextNode("Foundation");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(".\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("table");
      dom.setAttribute(el5,"class","status-table");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("thead");
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("tr");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("th");
      var el9 = dom.createTextNode("Name");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("th");
      var el9 = dom.createTextNode("Range Low");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("th");
      var el9 = dom.createTextNode("Range High");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("th");
      var el9 = dom.createTextNode("Active");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("tbody");
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("tr");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("Small");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("0");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("640");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("\n                ");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("span");
      dom.setAttribute(el9,"class","icon h3");
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n              ");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("tr");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("Medium");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("641");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("1024");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("\n                ");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("span");
      dom.setAttribute(el9,"class","icon h3");
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n              ");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("tr");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("Medium Up");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("641 and up");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("--");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("\n                ");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("span");
      dom.setAttribute(el9,"class","icon h3");
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n              ");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("tr");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("Large");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("1025");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("1440");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("\n                ");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("span");
      dom.setAttribute(el9,"class","icon h3");
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n              ");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("tr");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("Large Up");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("1025 and up");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("--");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("\n                ");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("span");
      dom.setAttribute(el9,"class","icon h3");
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n              ");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("tr");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("X-Large");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("1441");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("1920");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("\n                ");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("span");
      dom.setAttribute(el9,"class","icon h3");
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n              ");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("tr");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("X-Large Up");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("1441 and up");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("--");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("\n                ");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("span");
      dom.setAttribute(el9,"class","icon h3");
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n              ");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("tr");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("XX-Large");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("1921 and up");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("--");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("td");
      var el9 = dom.createTextNode("\n                ");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("span");
      dom.setAttribute(el9,"class","icon h3");
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n              ");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, get = hooks.get, subexpr = hooks.subexpr, concat = hooks.concat, attribute = hooks.attribute;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element0 = dom.childAt(fragment, [2]);
      var element1 = dom.childAt(element0, [3, 1, 1, 5]);
      var element2 = dom.childAt(element1, [1, 1]);
      var element3 = dom.childAt(element1, [3]);
      var element4 = dom.childAt(element3, [1]);
      var element5 = dom.childAt(element3, [3]);
      var element6 = dom.childAt(element3, [5]);
      var element7 = dom.childAt(element3, [7]);
      var element8 = dom.childAt(element3, [9]);
      var element9 = dom.childAt(element3, [11]);
      var element10 = dom.childAt(element3, [13]);
      var element11 = dom.childAt(element3, [15]);
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
      var attrMorph0 = dom.createAttrMorph(element2, 'class');
      var attrMorph1 = dom.createAttrMorph(element4, 'class');
      var attrMorph2 = dom.createAttrMorph(element5, 'class');
      var attrMorph3 = dom.createAttrMorph(element6, 'class');
      var attrMorph4 = dom.createAttrMorph(element7, 'class');
      var attrMorph5 = dom.createAttrMorph(element8, 'class');
      var attrMorph6 = dom.createAttrMorph(element9, 'class');
      var attrMorph7 = dom.createAttrMorph(element10, 'class');
      var attrMorph8 = dom.createAttrMorph(element11, 'class');
      var morph2 = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      inline(env, morph0, context, "partial", ["header"], {});
      inline(env, morph1, context, "partial", ["side-nav"], {});
      attribute(env, attrMorph0, element2, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.small"), "active"], {})]));
      attribute(env, attrMorph1, element4, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.small"), "active"], {})]));
      attribute(env, attrMorph2, element5, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.medium"), "active"], {})]));
      attribute(env, attrMorph3, element6, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.mediumUp"), "active"], {})]));
      attribute(env, attrMorph4, element7, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.large"), "active"], {})]));
      attribute(env, attrMorph5, element8, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.largeUp"), "active"], {})]));
      attribute(env, attrMorph6, element9, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.xlarge"), "active"], {})]));
      attribute(env, attrMorph7, element10, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.xlargeUp"), "active"], {})]));
      attribute(env, attrMorph8, element11, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.xxlarge"), "active"], {})]));
      inline(env, morph2, context, "partial", ["footer"], {});
      return fragment;
    }
  };
}()));