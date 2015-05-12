/**
 * The tricky layout route
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.TrickyLayoutRoute = Ember.Route.extend({
  /**
   * The model hook for the route. Returns a static array of post objects for the stupid tricky
   * layout route.
   *
   * @memberof App.TrickyLayoutRoute
   * @instance
   * @returns {Array.<Object>}
   */
  model: function() {

    return [{
      author: {
        email: 'rick.astley@rickastley.com',
        image: 'rick-astley',
        name: 'Rick Astley'
      },
      excerpt: 'A wise man once said: "Never gonna give you up. Never gonna let you down. Never gonna run around and desert you." Compelling words but allow me to share a tale of excess and frustration. When I was in my prime, there was no internet...',
      labels: [{
        className: '',
        name: 'Music'
      }, {
        className: 'secondary',
        name: 'Advice'
      }],
      title: 'How to Know When to Give Someone up'
    }, {
      author: {
        email: 'bob.ross@bobross.info',
        image: 'bob-ross',
        name: 'Bob Ross'
      },
      excerpt: 'You&#39;ve heard of Peter Piper? Well, he and I go way back. In some of my earliest paintings I used to portray him as a happy little fellow, picking his peck of pickled peppers. This got me thinking: Why don’t I pickle some peppers?',
      labels: [{
        className: '',
        name: 'Food'
      }],
      title: 'Happy Pickled Vegetables'
    }, {
      author: {
        email: 'tom.dale@tomdalerulez.biz',
        image: 'tom-dale',
        name: 'Tom Dale'
      },
      excerpt: 'There is a lot of confusion right now about the push to render JavaScript applications on the server-side. Part of this has to do with the awful terminology, but mostly it has to do with the fact that it&#39;s a fundamental shift in how we architect and deploy these apps, and the people peddling this idea (myself included) have not done a great job motivating the benefits.',
      labels: [{
        className: '',
        name: 'JavaScript'
      }, {
        className: 'secondary',
        name: 'Ember.js'
      }],
      title: 'You&#39;re Missing the Point of Server-Side Rendered JavaScript Apps'
    }, {
      author: {
        email: 'yehuda.katz@lolkatz.com',
        image: 'yehuda-katz',
        name: 'Yehuda Katz'
      },
      excerpt: 'Alex Russell posted some thoughts today about how he wishes the W3C would architect the next version of the Content Security Policy. I agree with Alex that designing CSP as a "library" that uses other browser primitives would increase its long-term utility and make it compose better with other platform features.',
      labels: [{
        className: '',
        name: 'Security'
      }, {
        className: 'secondary',
        name: 'CSP'
      }],
      title: 'An Extensible Approach to Browser Security Policy'
    }];
  }
});