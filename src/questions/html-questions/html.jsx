const HTMLQuestions = [
  {
    question: "How do you serve a page with content in multiple languages?",
    answer:
      "When an HTTP request is made to a server, the requesting user agent usually sends information about language preferences, such as in the Accept-Language header. The server can then use this information to return a version of the document in the appropriate language if such an alternative is available. The returned HTML document should also declare the lang attribute in the html tag, such as html lang=en.../html.",
  },
  {
    question:
      "What kind of things must you be wary of when design or developing for multilingual sites?",
    answer: `- Use lang attribute in your HTML.

- Directing users to their native language - Allow a user to change his country/language easily without hassle.

- Text in raster-based images (e.g. png, gif, jpg, etc.), is not a scalable approach - Placing text in an image is still a popular way to get good-looking, non-system fonts to display on any computer. However, to translate image text, each string of text will need to have a separate image created for each language. Anything more than a handful of replacements like this can quickly get out of control.

- Restrictive words/sentence length - Some content can be longer when written in another language. Be wary of layout or overflow issues in the design. It's best to avoid designing where the amount of text would make or break a design. Character counts come into play with things like headlines, labels, and buttons. They are less of an issue with free-flowing text such as body text or comments.

- Be mindful of how colors are perceived - Colors are perceived differently across languages and cultures. The design should use color appropriately.

- Formatting dates and currencies - Calendar dates are sometimes presented in different ways. Eg. "May 31, 2012" in the U.S. vs. "31 May 2012" in parts of Europe.

- Do not concatenate translated strings - Do not do anything like "The date today is " + date. It will break in languages with different word order. Use a template string with parameters substitution for each language instead. For example, look at the following two sentences in English and Chinese respectively: I will travel on {% date %} and {% date %} 我会出发. Note that the position of the variable is different due to grammar rules of the language.

- Language reading direction - In English, we read from left-to-right, top-to-bottom, in traditional Japanese, text is read up-to-down, right-to-left.`,
  },
  {
    question: "What are data- attributes good for?",
    answer: `- Before JavaScript frameworks became popular, front end developers used data- attributes to store extra data within the DOM itself, without other hacks such as non-standard attributes, extra properties on the DOM. It is intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements.

- These days, using data- attributes is generally not encouraged. One reason is that users can modify the data attribute easily by using inspect element in the browser. The data model is better stored within JavaScript itself and stay updated with the DOM via data binding possibly through a library or a framework.

- However, one perfectly valid use of data attributes, is to add a hook for end to end testing frameworks such as Selenium and Capybara without having to create a meaningless classes or ID attributes. The element needs a way to be found by a particular Selenium spec and something like data-selector='the-thing' is a valid way to do so without convoluting the semantic markup otherwise.`,
  },
  {
    question:
      "Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
    answer: `- Semantics - Allowing you to describe more precisely what your content is.

- Connectivity - Allowing you to communicate with the server in new and innovative ways.

- Offline and storage - Allowing webpages to store data on the client-side locally and operate offline more efficiently.

- Multimedia - Making video and audio first-class citizens in the Open Web.

- 2D/3D graphics and effects - Allowing a much more diverse range of presentation options.

- Performance and integration - Providing greater speed optimization and better usage of computer hardware.

- Device access - Allowing for the usage of various input and output devices.

- Styling - Letting authors write more sophisticated themes.`,
  },
  {
    question:
      "Describe the difference between script, script async and script defer.",
    answer: `- script - HTML parsing is blocked, the script is fetched and executed immediately, HTML parsing resumes after the script is executed.

- script async - The script will be fetched in parallel to HTML parsing and executed as soon as it is available (potentially before HTML parsing completes). Use async when the script is independent of any other scripts on the page, for example, analytics.

- script defer - The script will be fetched in parallel to HTML parsing and executed when the page has finished parsing. If there are multiple of them, each deferred script is executed in the order they were encoun­tered in the document. If a script relies on a fully-parsed DOM, the defer attribute will be useful in ensuring that the HTML is fully parsed before executing. There's not much difference in putting a normal script at the end of body. A deferred script must not contain document.write.`,
  },
  {
    question:
      "Why is it generally a good idea to position CSS link between head  and JS scripts just before body? Do you know any exceptions?",
    answer: `- Putting links in the head is part of proper specification in building an optimized website. When a page first loads, HTML and CSS are being parsed simultaneously; HTML creates the DOM (Document Object Model) and CSS creates the CSSOM (CSS Object Model). Both are needed to create the visuals in a website, allowing for a quick "first meaningful paint" timing. This progressive rendering is a category optimization sites are measured in their performance scores. Putting stylesheets near the bottom of the document is what prohibits progressive rendering in many browsers. Some browsers block rendering to avoid having to repaint elements of the page if their styles change. The user is then stuck viewing a blank white page. Other times there can be flashes of unstyled content (FOUC), which can shows a webpage with no styling applied.

- scripts block HTML parsing while they are being downloaded and executed. Placing the scripts at the bottom will allow the HTML to be parsed and displayed to the user first. An exception for positioning of scripts at the bottom is when your script contains document.write(), but these days it's not a good practice to use document.write(). Also, placing scripts at the bottom means that the browser cannot start downloading the scripts until the entire document is parsed. This ensures your code that needs to manipulate DOM elements will not throw and error and halt the entire script. If you need to put script in the head, use the defer attribute, which will achieve the same effect of downloading and running the script only after the HTML is parsed.`,
  },
  {
    question: "What is progressive rendering?",
    answer: `- Progressive rendering is the name given to techniques used to improve the performance of a webpage (in particular, improve perceived load time) to render content for display as quickly as possible.
      
- It used to be much more prevalent in the days before broadband internet but it is still used in modern development as mobile data connections are becoming increasingly popular (and unreliable)!`,
    example: `- Lazy loading of images - Images on the page are not loaded all at once. JavaScript will be used to load an image when the user scrolls into the part of the page that displays the image.

- Prioritizing visible content (or above-the-fold rendering) - Include only the minimum CSS/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred scripts or listen for the DOMContentLoaded/load event to load in other resources and content.

- Async HTML fragments - Flushing parts of the HTML to the browser as the page is constructed on the back end.`,
  },
  {
    question:
      "Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.",
    answer:
      "- You would use the srcset attribute when you want to serve different images to users depending on their device display width - serve higher quality images to devices with retina display enhances the user experience while serving lower resolution images to low-end devices increase performance and decrease data wastage (because serving a larger image will not have any visible difference). ",
  },
  {
    question: "What does a doctype do?",
    answer:
      "- Including the DOCTYPE in a document ensures that the browser makes a best-effort attempt at following the relevant specifications.",
  },
  {
    question: "What is the difference between XHTML and HTML?",
    answer:
      "- HTML and XHTML are both markup languages in which web pages are written. The main difference between the two is that HTML syntax is SGML(Standard Generalized Markup Language) based while XHTML syntax is XML(Extensible Markup Language) based",
  },
  {
    question: "What does the keygen element do?",
    answer:
      "The purpose of <keygen> element is to provide a secure way to authenticate users.",
  },
  {
    question: "What does the bdo element do?",
    answer:
      "Overrides the current directionality of text, so that the text within is rendered in a different direction.",
  },
  {
    question: "In what situation should you use the <small> tag?",
    answer: "When you want to add copyright information inside a <footer>",
  },
  {
    question: "What does the scoped attribute do?",
    answer: "Applies style rules to all children of the scoped parent element.",
  },
  {
    question:
      "Does main1.css have to be downloaded and parsed before main2.css can be fetched?",
    answer: "No",
  },
  {
    question: `What is an iframe and how it works?`,
    answer: `An iframe is an HTML document which can be embedded inside another HTML page.`,
  },
  {
    question: `Explain meta tags in HTML`,
    answer: `- meta tags always go inside head tag of the HTML page
    - meta tags is always passed as name/value pairs
    - meta tags are not displayed on the page but intended for the browser`,
  },
  {
    question: `What is the difference between span and div?`,
    answer: `- div is a block element
    - span is an inline element
    - span can be placed inside of a div but not vice-versa`,
  },
  {
    question: `What were some of the key goals and motivations for the HTML5 specification?`,
    answer: `- deliver rich content without additional plugins
    - provide better semantic support for web page structure
    - provide a stricter parsing standard to simplify error handling
    - provide better cross-platform support`,
  },
  {
    question: `Briefly describe the correct usage of the following HTML5 semantic elements: <header>, <article>, <section>, <footer>`,
    answer: `- header => an element which contains introductory and navigational information about a section
    - article => a self-contained composition
    - section => a grouping element
    - footer => holds information that should appear at the end of a section`,
  },
  {
    question: `What is Character Encoding?`,
    answer: `To display a HTML page correctly, a web browser must know which character set to use.`,
  },
  {
    question: `What is a self closing tag? `,
    answer: `In HTML5 it is not strictly necessary to close certain HTML tags.`,
  },
  {
    question: `When is it appropriate to use the small element?`,
    answer: `For short runs of text like disclaimers, caveats, copyrights and so on.`,
  },
  {
    question: `Explain almost standard, full standard and quirks mode`,
    answer: `When W3C was introduced not every brwoser could just start using them, because it would break most existing sites.
    
    - quirks mode => emulates nonstandard behavior
    - full standard mode => behavior described is same as described by HTML and CSS
    - Almost standard mode => small number of quirks implementation`,
  },
  {
    question: `How do you set IE compatibility mode?`,
    answer: `<meta http-equiv="X-UA-Compatible" content="IE=edge" />`,
  },
  {
    question: `What is the difference between <section> and <div>?`,
    answer: `- section => groups elements
    - div => only a container element`,
  },
  {
    question: `Where and why is the 'rel="noopener"' attribute used?`,
    answer: `Prevents other pages to gain any kind of access of the original page`,
  },
  {
    question: `Can a web page contain multiple <header> elements? What about <footer> elements?`,
    answer: `- Yes, but it is recommend to use only one of each in each section element`,
  },
  {
    question: `What is the purpose of 'main' element?`,
    answer: `- According to W3C, main should be used only for content that is unique to that document`,
  },
];

export default HTMLQuestions;
