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
      var el3 = dom.createElement("p");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("small");
      var el5 = dom.createTextNode("\n        Visit me at ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("a");
      dom.setAttribute(el5,"href","http://vikingglory.com/");
      var el6 = dom.createTextNode("vikingglory.com");
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
      dom.setAttribute(el1,"class","hide-for-medium-down");
      var el2 = dom.createTextNode("Menu");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      dom.setAttribute(el1,"class","no-bullet small-block-grid-4 medium-block-grid-4 large-block-grid-1");
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
      inline(env, morph3, context, "link-to", ["Responsive Images", "responsive-images"], {"class": "side-nav-link"});
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
        var el1 = dom.createTextNode("\n          Responsive Images\n");
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
      block(env, morph3, context, "link-to", ["responsive-images"], {"class": "block panel"}, child2, null);
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
Ember.TEMPLATES["responsive-images"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"width","100");
        dom.setAttribute(el1,"alt","logo");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, subexpr = hooks.subexpr, concat = hooks.concat, attribute = hooks.attribute;
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
        var element2 = dom.childAt(fragment, [1]);
        var attrMorph0 = dom.createAttrMorph(element2, 'src');
        attribute(env, attrMorph0, element2, "src", concat(env, ["img/logo-small", subexpr(env, context, "if", [get(env, context, "media.retina"), "-2x", ""], {}), ".png"]));
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"width","200");
          dom.setAttribute(el1,"alt","logo");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, subexpr = hooks.subexpr, concat = hooks.concat, attribute = hooks.attribute;
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
          var element1 = dom.childAt(fragment, [1]);
          var attrMorph0 = dom.createAttrMorph(element1, 'src');
          attribute(env, attrMorph0, element1, "src", concat(env, ["img/logo-medium", subexpr(env, context, "if", [get(env, context, "media.retina"), "-2x", ""], {}), ".png"]));
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
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"width","300");
          dom.setAttribute(el1,"alt","Logo");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, subexpr = hooks.subexpr, concat = hooks.concat, attribute = hooks.attribute;
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
          var element0 = dom.childAt(fragment, [1]);
          var attrMorph0 = dom.createAttrMorph(element0, 'src');
          attribute(env, attrMorph0, element0, "src", concat(env, ["img/logo", subexpr(env, context, "if", [get(env, context, "media.retina"), "-2x", ""], {}), ".png"]));
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
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "if", [get(env, context, "media.medium")], {}, child0, child1);
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
      var el6 = dom.createTextNode("Responsive Images");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("\n          Fully supported responsive images are still on the horizon. We know what problems\n          responsive images solve for us but they can be a bit of a pain to figure out. This simple\n          technique makes it fairly easy to use different images for different media with Ember.\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h5");
      var el6 = dom.createTextNode("Example #1");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        \n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("\n          Retina logo via simple if/else in ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("src");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" attribute.\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("img");
      dom.setAttribute(el6,"width","300");
      dom.setAttribute(el6,"alt","Logo");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","label secondary");
      var el6 = dom.createTextNode("Handlebars");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("code");
      dom.setAttribute(el5,"class","code-block");
      var el6 = dom.createElement("pre");
      var el7 = dom.createTextNode("\n<img src=\"img/logo{{if media.retina '-2x' ''}}.png\" width=\"300\" alt=\"Logo\">\n\n");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("hr");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h5");
      var el6 = dom.createTextNode("Example #2");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("\n          Different logo for small, medium and large screens.\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","label secondary");
      var el6 = dom.createTextNode("Handlebars");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("code");
      dom.setAttribute(el5,"class","code-block");
      var el6 = dom.createElement("pre");
      var el7 = dom.createTextNode("\n{{#if media.small}}\n  <img src=\"img/logo-small{{if media.retina '-2x' ''}}.png\" width=\"100\" alt=\"logo\">\n{{else if media.medium}}\n  <img src=\"img/logo-medium{{if media.retina '-2x' ''}}.png\" width=\"200\" alt=\"logo\">\n{{else}}\n  <img src=\"img/logo{{if media.retina '-2x' ''}}.png\" width=\"300\" alt=\"Logo\">\n{{/if}}\n\n");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("hr");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h5");
      var el6 = dom.createTextNode("Example #3");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("\n          Same as example #2 but with a responsive image component instead of ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("if/else");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          blocks.\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","label secondary");
      var el6 = dom.createTextNode("Handlebars");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("code");
      dom.setAttribute(el5,"class","code-block");
      var el6 = dom.createElement("pre");
      var el7 = dom.createTextNode("\n{{responsive-image media=media retina=\"-2x\" alt=\"Logo\"\n  sizes=\"small, medium, largeUp\"\n  srcset=\"img/logo-small.png 100w, img/logo-medium.png 200w, img/logo.png 300w\"}}\n\n");
      dom.appendChild(el6, el7);
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
      var hooks = env.hooks, inline = hooks.inline, get = hooks.get, subexpr = hooks.subexpr, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block;
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
      var element3 = dom.childAt(fragment, [2]);
      var element4 = dom.childAt(element3, [3, 1, 1]);
      var element5 = dom.childAt(element4, [9, 1]);
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(dom.childAt(element3, [1]),1,1);
      var attrMorph0 = dom.createAttrMorph(element5, 'src');
      var morph2 = dom.createMorphAt(dom.childAt(element4, [21]),1,1);
      var morph3 = dom.createMorphAt(dom.childAt(element4, [33]),1,1);
      var morph4 = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      inline(env, morph0, context, "partial", ["header"], {});
      inline(env, morph1, context, "partial", ["side-nav"], {});
      attribute(env, attrMorph0, element5, "src", concat(env, ["img/logo", subexpr(env, context, "if", [get(env, context, "media.retina"), "-2x", ""], {}), ".png"]));
      block(env, morph2, context, "if", [get(env, context, "media.small")], {}, child0, child1);
      inline(env, morph3, context, "responsive-image", [], {"media": get(env, context, "media"), "retina": "-2x", "alt": "Logo", "sizes": "small, medium, largeUp", "srcset": "img/logo-small.png 100w, img/logo-medium.png 200w, img/logo.png 300w"});
      inline(env, morph4, context, "partial", ["footer"], {});
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
      var el6 = dom.createTextNode("\n          The following tables show the statuses of different media queries. See more about how\n          this is done by taking a look at the application initializer");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("sup");
      var el7 = dom.createTextNode("1");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" in\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"href","https://github.com/jneurock/responsive-templates/blob/master/js/app/initializers/media-init.js");
      var el7 = dom.createTextNode("\n            js/app/initializers/media-init.js");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(".\n        ");
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
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("\n          The table below shows some additional media statuses that can be gathered via\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"href","https://modernizr.com/");
      var el7 = dom.createTextNode("Modernizr");
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
      var el9 = dom.createTextNode("Landscape");
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
      var el9 = dom.createTextNode("Potrait");
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
      var el9 = dom.createTextNode("Retina");
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
      var el9 = dom.createTextNode("Touch enabled");
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
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h5");
      var el6 = dom.createTextNode("References");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("sup");
      var el7 = dom.createTextNode("1");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"href","http://guides.emberjs.com/v1.10.0/understanding-ember/dependency-injection-and-service-lookup/#toc_dependency-management-in-ember-js");
      var el7 = dom.createTextNode("\n            Dependency Management in Ember.js\n          ");
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
      var element1 = dom.childAt(element0, [3, 1, 1]);
      var element2 = dom.childAt(element1, [7, 3]);
      var element3 = dom.childAt(element2, [1]);
      var element4 = dom.childAt(element2, [3]);
      var element5 = dom.childAt(element2, [5]);
      var element6 = dom.childAt(element2, [7]);
      var element7 = dom.childAt(element2, [9]);
      var element8 = dom.childAt(element2, [11]);
      var element9 = dom.childAt(element2, [13]);
      var element10 = dom.childAt(element2, [15]);
      var element11 = dom.childAt(element1, [11, 3]);
      var element12 = dom.childAt(element11, [1]);
      var element13 = dom.childAt(element11, [3]);
      var element14 = dom.childAt(element11, [5]);
      var element15 = dom.childAt(element11, [7]);
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
      var attrMorph0 = dom.createAttrMorph(element3, 'class');
      var attrMorph1 = dom.createAttrMorph(element4, 'class');
      var attrMorph2 = dom.createAttrMorph(element5, 'class');
      var attrMorph3 = dom.createAttrMorph(element6, 'class');
      var attrMorph4 = dom.createAttrMorph(element7, 'class');
      var attrMorph5 = dom.createAttrMorph(element8, 'class');
      var attrMorph6 = dom.createAttrMorph(element9, 'class');
      var attrMorph7 = dom.createAttrMorph(element10, 'class');
      var attrMorph8 = dom.createAttrMorph(element12, 'class');
      var attrMorph9 = dom.createAttrMorph(element13, 'class');
      var attrMorph10 = dom.createAttrMorph(element14, 'class');
      var attrMorph11 = dom.createAttrMorph(element15, 'class');
      var morph2 = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      inline(env, morph0, context, "partial", ["header"], {});
      inline(env, morph1, context, "partial", ["side-nav"], {});
      attribute(env, attrMorph0, element3, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.small"), "active"], {})]));
      attribute(env, attrMorph1, element4, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.medium"), "active"], {})]));
      attribute(env, attrMorph2, element5, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.mediumUp"), "active"], {})]));
      attribute(env, attrMorph3, element6, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.large"), "active"], {})]));
      attribute(env, attrMorph4, element7, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.largeUp"), "active"], {})]));
      attribute(env, attrMorph5, element8, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.xlarge"), "active"], {})]));
      attribute(env, attrMorph6, element9, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.xlargeUp"), "active"], {})]));
      attribute(env, attrMorph7, element10, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.xxlarge"), "active"], {})]));
      attribute(env, attrMorph8, element12, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.landscape"), "active"], {})]));
      attribute(env, attrMorph9, element13, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.portrait"), "active"], {})]));
      attribute(env, attrMorph10, element14, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.retina"), "active"], {})]));
      attribute(env, attrMorph11, element15, "class", concat(env, [subexpr(env, context, "if", [get(env, context, "media.touch"), "active"], {})]));
      inline(env, morph2, context, "partial", ["footer"], {});
      return fragment;
    }
  };
}()));
Ember.TEMPLATES["components/responsive-image"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
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