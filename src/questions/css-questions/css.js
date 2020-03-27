const CSSQuestions = [
  {
    question: "What is CSS selector specificity and how does it work?",
    answer: `- The browser determines what styles to show on an element depending on the specificity of CSS rules. We assume that the browser has already determined the rules that match a particular element. Among the matching rules, the specificity, four comma-separate values, a, b, c, d are calculated for each rule based on the following:

Start at 0, add 1000 for style attribute, add 100 for each ID, add 10 for each attribute, class or pseudo-class, add 1 for each element name or pseudo-element.

- The specificity of A is 1 (one element)

- The specificity of B is 101 (one ID reference and one element)

- The specificity of C is 1000 (inline styling)`,

    example: `A: h1
B: #content h1
C: <div id="content"><h1 style="color: #ffffff">Heading</h1></div>

Since 1 < 101 < 1000, the third rule (C) has a greater level of specificity, and therefore will be applied.`
  },
  {
    question:
      "What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?",
    answer: `Resetting - Resetting is meant to strip all default browser styling on elements. For e.g. margins, paddings, font-sizes of all elements are reset to be the same. You will have to redeclare styling for common typographic elements.
    
Normalizing - Normalizing preserves useful default styles rather than "unstyling" everything. It also corrects bugs for common browser dependencies.`
  },
  {
    question: "Describe Floats and how they work.",
    answer: `- Float is a CSS positioning property. Floated elements remain a part of the flow of the page, and will affect the positioning of other elements (e.g. text will flow around floated elements), unlike position: absolute elements, which are removed from the flow of the page.

 - The CSS clear property can be used to be positioned below left/right/both floated elements.`
  },
  {
    question: "Describe z-index and how stacking context is formed.",
    answer: `- The z-index property in CSS controls the vertical stacking order of elements that overlap. z-index only affects elements that have a position value which is not static.

- Without any z-index value, elements stack in the order that they appear in the DOM (the lowest one down at the same hierarchy level appears on top). Elements with non-static positioning (and their children) will always appear on top of elements with default static positioning, regardless of HTML hierarchy.

- A stacking context is an element that contains a set of layers. Within a local stacking context, the z-index values of its children are set relative to that element rather than to the document root. Layers outside of that context — i.e. sibling elements of a local stacking context — can't sit between layers within it. If an element B sits on top of element A, a child element of element A, element C, can never be higher than element B even if element C has a higher z-index than element B.`
  },
  {
    question: "Describe BFC (Block Formatting Context) and how it works.",
    answer:
      "- A Block Formatting Context (BFC) is part of the visual CSS rendering of a web page in which block boxes are laid out. Floats, absolutely positioned elements, inline-blocks, table-cells, table-captions, and elements with overflow other than visible (except when that value has been propagated to the viewport) establish new block formatting contexts."
  },
  {
    question: "How would you approach fixing browser-specific styling issues?",
    answer: `- After identifying the issue and the offending browser, use a separate style sheet that only loads when that specific browser is being used. This technique requires server-side rendering though.

    - Use libraries like Bootstrap that already handles these styling issues for you.

    - Use autoprefixer to automatically add vendor prefixes to your code.

    - Use Reset CSS or Normalize.css.

    - If you're using Postcss (or a similar transpiling library), there may be plugins which allow you to opt in for using modern CSS syntax (and even W3C proposals) that will transform those sections of your code into corresponding safe code that will work in the targets you've used.`
  },
  {
    question:
      "How do you serve your pages for feature-constrained browsers?\nWhat techniques/processes do you use?",
    answer: `- Graceful degradation - The practice of building an application for modern browsers while ensuring it remains functional in older browsers.

- Progressive enhancement - The practice of building an application for a base level of user experience, but adding functional enhancements when a browser supports it.

- Use caniuse.com to check for feature support.

- Autoprefixer for automatic vendor prefix insertion.

- Feature detection using Modernizr.

- Use CSS Feature queries`
  },
  {
    question:
      "What are the different ways to visually hide content (and make it available only for screen readers)?",
    answer: `-visibility: hidden. However, the element is still in the flow of the page, and still takes up space.

- width: 0; height: 0. Make the element not take up any space on the screen at all, resulting in not showing it.

- position: absolute; left: -99999px. Position it outside of the screen.

- text-indent: -9999px. This only works on text within the block elements.

- Metadata. For example by using Schema.org, RDF, and JSON-LD.

- WAI-ARIA. A W3C technical specification that specifies how to increase the accessibility of web pages.`
  },
  {
    question:
      "Can you give an example of an @media property other than screen?",
    answer: `- all - for all media type devices

- print - for printers

- speech - for screenreaders that "reads" the page out loud
`
  },
  {
    question:
      "What are the advantages/disadvantages of using CSS preprocessors?",
    answer: `Advantages:
- CSS is made more maintainable.

- Easy to write nested selectors.

- Variables for consistent theming. Can share theme files across different projects.

- Mixins to generate repeated CSS.

- Sass features like loops, lists, and maps can make configuration easier and less verbose.

- Splitting your code into multiple files. CSS files can be split up too but doing so will require an HTTP request to download each CSS file.

Disadvantages:
- Requires tools for preprocessing. Re-compilation time can be slow.

- Not writing currently and potentially usable CSS. For example, by using something like postcss-loader with webpack, you can write potentially future-compatible CSS, allowing you to use things like CSS variables instead of Sass variables. Thus, you're learning new skills that could pay off if/when they become standardized.`
  },
  {
    question:
      "How would you implement a web design comp that uses non-standard fonts?",
    answer:
      "- Use @font-face and define font-family for different font-weights.",
    example: `@font-face {
  [font-family: <family-name>;]?
  [src: [ <uri> [format(<string>#)]? | <font-face-name> ]#;]?
  [unicode-range: <urange>#;]?
  [font-variant: <font-variant>;]?
  [font-feature-settings: normal|<feature-tag-value>#;]?
  [font-stretch: <font-stretch>;]?
  [font-weight: <weight>];
  [font-style: <style>];
}`
  },
  {
    question: "Describe pseudo-elements and explain what they are used for.",
    answer:
      "- A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). They can be used for decoration (:first-line, :first-letter) or adding elements to the markup (combined with content: ...) without having to modify the markup (:before, :after)"
  },
  {
    question:
      "Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.",
    answer: `The CSS box model describes the rectangular boxes that are generated for elements in the document tree and laid out according to the visual formatting model. Each box has a content area (e.g. text, an image, etc.) and optional surrounding padding, border, and margin areas.
    
The CSS box model is responsible for calculating:

  - How much space a block element takes up.

  - Whether or not borders and/or margins overlap, or collapse.

  - A box's dimensions.

The box model has the following rules:

  - The dimensions of a block element are calculated by width, 
    height, padding, borders, and margins.

  - If no height is specified, a block element will be as high as 
    the content it contains, plus padding (unless there are floats, for which see below).

  - If no width is specified, a non-floated block element will expand
    to fit the width of its parent minus padding.

  - The height of an element is calculated by the content's
    height.

  - The width of an element is calculated by the content's
     width.

  - By default, paddings and borders are not part of the
    width and height of an element.`
  },
  {
    question:
      "What does * { box-sizing: border-box; } do? What are its advantages?",
    answer: `- By default, elements have box-sizing: content-box applied, and only the content size is being accounted for.

- box-sizing: border-box changes how the width and height of elements are being calculated, border and padding are also being included in the calculation.

- The height of an element is now calculated by the content's height + vertical padding + vertical border width.

- The width of an element is now calculated by the content's width + horizontal padding + horizontal border width.

- Taking into account paddings and borders as part of our box model resonates better with how designers actually imagine content in grids.`
  },
  {
    question: `What's the difference between the "nth-of-type()" and "nth-child()" selectors?`,
    answer:
      "- nth-child will only look through child nodes. That is, any node that is inside of your selector. nth-of-type goes through the whole DOM and looks for anything that matches your selector."
  },
  {
    question:
      "What's the difference between a relative, fixed, absolute and statically positioned element?",
    answer: `A positioned element is an element whose computed position property is either relative, absolute, fixed or sticky.
    
- static - The default position; the element will flow into the page as it normally would. The top, right, bottom, left and z-index properties do not apply.

- relative - The element's position is adjusted relative to itself, without changing layout (and thus leaving a gap for the element where it would have been had it not been positioned).

- absolute - The element is removed from the flow of the page and positioned at a specified position relative to its closest positioned ancestor if any, or otherwise relative to the initial containing block. Absolutely positioned boxes can have margins, and they do not collapse with any other margins. These elements do not affect the position of other elements.

- fixed - The element is removed from the flow of the page and positioned at a specified position relative to the viewport and doesn't move when scrolled.

- sticky - Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned.`
  },
  {
    question:
      "Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?",
    answer: `- translate() is a value of CSS transform. Changing transform or opacity does not trigger browser reflow or repaint but does trigger compositions; whereas changing the absolute positioning triggers reflow. transform causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. Hence translate() is more efficient and will result in shorter paint times for smoother animations.

- When using translate(), the element still occupies its original space (sort of like position: relative), unlike in changing the absolute positioning.`
  }
];

export default CSSQuestions;
