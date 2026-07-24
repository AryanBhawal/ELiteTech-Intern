document.addEventListener('DOMContentLoaded', () => {

    // --- LUCIDE ICONS INITIALIZATION ---
    lucide.createIcons();

    // --- THEME TOGGLE LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlEl = document.documentElement;

    // Set initial theme from localStorage or system preference
    const applyTheme = () => {
        if (localStorage.getItem('theme') === 'dark' || 
           (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlEl.classList.add('dark');
            themeIcon.setAttribute('data-lucide', 'moon');
        } else {
            htmlEl.classList.remove('dark');
            themeIcon.setAttribute('data-lucide', 'sun');
        }
        lucide.createIcons();
    };

    applyTheme();

    themeToggle.addEventListener('click', () => {
        htmlEl.classList.toggle('dark');
        if (htmlEl.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.setAttribute('data-lucide', 'moon');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.setAttribute('data-lucide', 'sun');
        }
        lucide.createIcons();
    });
    
    // --- MOBILE MENU LOGIC ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    const openMobileMenu = () => {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenuOverlay.classList.remove('hidden');
    };

    const closeMobileMenu = () => {
        mobileMenu.classList.add('translate-x-full');
        mobileMenuOverlay.classList.add('hidden');
    };

    mobileMenuBtn.addEventListener('click', openMobileMenu);
    closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    mobileMenuLinks.forEach(link => link.addEventListener('click', closeMobileMenu));


    // --- COURSE DATA & LESSON NOTES ---
    const courses = [
        {
            id: 'html',
            title: 'HTML Fundamentals',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
            description: 'Learn the essential building blocks of the web. Master semantic HTML to create well-structured and accessible websites from scratch.',
            lessons: [
                { title: 'Introduction & Structure', videoUrl: 'https://www.youtube.com/embed/pQN-pnXPaVg', notes: `
                    <h3 class="text-2xl font-bold mb-4">Introduction</h3>
                    <p>HTML, which stands for HyperText Markup Language, is the standard markup language used to structure content on the web. It forms the skeleton of a webpage, using various tags and elements to define headings, paragraphs, links, images, and more. Every website you visit, regardless of its complexity, is built upon an HTML foundation.</p>
                    
                    <h3 class="text-2xl font-bold mt-8 mb-4">Structure of an HTML Document</h3>
                    <p>A typical HTML file begins with a <code>&lt;!DOCTYPE html&gt;</code> declaration to inform the browser that the document is an HTML5 page. The core structure consists of the <code>&lt;html&gt;</code> tag, which contains the <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> sections.</p>
                    <ul class="list-disc list-inside space-y-2 my-4">
                        <li>The <code>&lt;head&gt;</code> section contains meta-information about the page, such as the title (displayed in the browser tab), links to stylesheets, and character encoding.</li>
                        <li>The <code>&lt;body&gt;</code> section contains all the visible content of the webpage.</li>
                    </ul>
                    <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;p&gt;This is my first webpage.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>`
                },
                { title: 'Important Tags & Features', videoUrl: 'https://www.youtube.com/embed/bWPMSSsVdPk', notes: `
                    <h3 class="text-2xl font-bold mb-4">Important Tags</h3>
                    <ul class="list-disc list-inside space-y-4">
                        <li><b>Headings:</b> <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> define hierarchical headings, with <code>&lt;h1&gt;</code> being the most important.</li>
                        <li><b>Paragraphs:</b> The <code>&lt;p&gt;</code> tag is used for blocks of text.</li>
                        <li><b>Links:</b> The <code>&lt;a&gt;</code> (anchor) tag creates hyperlinks. The <code>href</code> attribute specifies the destination URL.</li>
                        <li><b>Images:</b> The <code>&lt;img&gt;</code> tag embeds an image. It requires <code>src</code> (source) and <code>alt</code> (alternative text for accessibility) attributes.</li>
                        <li><b>Lists:</b> <code>&lt;ol&gt;</code> creates an ordered (numbered) list, while <code>&lt;ul&gt;</code> creates an unordered (bulleted) list. Each item is defined with an <code>&lt;li&gt;</code> tag.</li>
                        <li><b>Forms:</b> The <code>&lt;form&gt;</code> element is a container for user input controls like <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;button&gt;</code>.</li>
                        <li><b>Tables:</b> Use <code>&lt;table&gt;</code> to create tables, with <code>&lt;tr&gt;</code> for rows, <code>&lt;th&gt;</code> for headers, and <code>&lt;td&gt;</code> for data cells.</li>
                    </ul>
                    <h3 class="text-2xl font-bold mt-8 mb-4">Key Features of Modern HTML</h3>
                    <p>Modern HTML (HTML5) introduced semantic tags like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;nav&gt;</code>, which help structure content meaningfully for browsers, search engines, and assistive technologies. It also added native support for multimedia with the <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> elements.</p>
                    <div class="example-box">
                        <h4 class="font-bold mb-2">📌 Example: A simple form</h4>
                        <pre><code class="language-html">&lt;form&gt;
  &lt;label for="username"&gt;Name:&lt;/label&gt;
  &lt;input type="text" id="username" name="username"&gt;
  
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
                    </div>`
                },
            ]
        },
        {
            id: 'css',
            title: 'Modern CSS Styling',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
            description: 'Bring your websites to life by learning the fundamentals of styling and the power of CSS selectors.',
            lessons: [
                { title: 'CSS Crash Course for Beginners', videoUrl: 'https://www.youtube.com/embed/wRNinF7YQqQ', notes: `
                    <h3 class="text-2xl font-bold mb-4">Introduction to CSS</h3>
                    <p>CSS (Cascading Style Sheets) is the language used to style and design the visual presentation of HTML elements. It controls everything from layout, colors, and fonts to spacing and responsiveness, allowing you to transform a plain HTML document into a beautiful and engaging website.</p>
                    <h3 class="text-2xl font-bold mt-8 mb-4">Ways to Apply CSS</h3>
                    <ul class="list-disc list-inside space-y-2">
                        <li><b>Inline:</b> Using the <code>style</code> attribute directly on an HTML tag (e.g., <code>&lt;p style="color:red;"&gt;Hello&lt;/p&gt;</code>). This method has high specificity but is hard to maintain.</li>
                        <li><b>Internal:</b> Placing CSS rules inside a <code>&lt;style&gt;</code> tag within the HTML's <code>&lt;head&gt;</code> section. This is useful for single-page styling.</li>
                        <li><b>External:</b> Linking to a dedicated <code>.css</code> file using <code>&lt;link rel="stylesheet" href="style.css"&gt;</code>. This is the recommended best practice for organization and reusability.</li>
                    </ul>
                    <h3 class="text-2xl font-bold mt-8 mb-4">The Box Model</h3>
                    <p>Every HTML element is treated as a rectangular box. The CSS Box Model describes the makeup of this box:</p>
                    <ul class="list-disc list-inside space-y-2 mt-2">
                        <li><b>Content:</b> The area where your text and images appear.</li>
                        <li><b>Padding:</b> The transparent space around the content, inside the border.</li>
                        <li><b>Border:</b> A line that goes around the padding and content.</li>
                        <li><b>Margin:</b> The transparent space outside the border, pushing other elements away.</li>
                    </ul>
                    <div class="example-box">
                        <h4 class="font-bold mb-2">📌 Example: Box Model Properties</h4>
                        <pre><code class="language-css">.box {
  width: 200px;
  padding: 10px; /* 10px of space inside the border */
  border: 2px solid black;
  margin: 20px; /* 20px of space outside the border */
}</code></pre>
                    </div>`
                },
                { title: 'Mastering CSS Selectors', videoUrl: 'https://www.youtube.com/embed/sqJ6xZ9mUwE', notes: `
                    <h3 class="text-2xl font-bold mb-4">CSS Selectors</h3>
                    <p>Selectors are patterns that target HTML elements so they can be styled. Understanding selectors is fundamental to using CSS effectively.</p>
                    <ul class="list-disc list-inside space-y-2">
                        <li><b>Element Selector:</b> Targets all instances of an element (e.g., <code>p { color: blue; }</code>).</li>
                        <li><b>Class Selector:</b> Targets elements with a specific class attribute, prefixed with a dot (e.g., <code>.box { border: 1px solid black; }</code>).</li>
                        <li><b>ID Selector:</b> Targets one unique element with a specific ID, prefixed with a hash (e.g., <code>#header { background: gray; }</code>).</li>
                        <li><b>Group Selector:</b> Applies the same styles to multiple selectors by separating them with a comma (e.g., <code>h1, p { font-family: Arial; }</code>).</li>
                    </ul>
                    <h3 class="text-2xl font-bold mt-8 mb-4">Advanced Features & Responsiveness</h3>
                    <p>Modern CSS offers powerful tools for layout and adapting to different screen sizes.</p>
                      <ul class="list-disc list-inside space-y-2">
                        <li><b>Flexbox & Grid:</b> Powerful layout modules for creating complex, responsive structures easily.</li>
                        <li><b>Media Queries:</b> The core of responsive design. They allow you to apply specific CSS rules only when certain conditions are met, such as the screen width being below a certain size.</li>
                      </ul>
                      <div class="example-box">
                        <h4 class="font-bold mb-2">📌 Example: A Simple Media Query</h4>
                        <p>This rule changes the body's background color on screens that are 600px wide or smaller.</p>
                        <pre><code class="language-css">@media (max-width: 600px) {
  body {  
    background: lightblue;  
  }
}</code></pre>
                    </div>`
                },
            ]
        },
        {
            id: 'javascript',
            title: 'JavaScript Essentials',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
            description: 'Make your websites interactive. Understand variables, data types, functions, control flow, and asynchronous programming concepts.',
            lessons: [
                { title: 'JS Basics & Variables', videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk', notes: `
                    <h3 class="text-2xl font-bold mb-4">Introduction to JavaScript</h3>
                    <p>JavaScript (JS) is a high-level, dynamic programming language that adds interactivity and functionality to websites. It runs directly in the user's browser (client-side) and can be used to manipulate HTML and CSS, handle user events like clicks and keyboard presses, validate forms, and make asynchronous network requests to servers.</p>
                      <h3 class="text-2xl font-bold mt-8 mb-4">Basic Syntax & Data Types</h3>
                      <p>A simple JavaScript statement might involve declaring a variable and logging it to the console.</p>
                    <pre><code class="language-js">let name = "Aryan";
console.log("Hello " + name); // Outputs: Hello Aryan</code></pre>
                    <p>JavaScript has several fundamental data types:</p>
                    <ul class="list-disc list-inside space-y-2 mt-2">
                        <li><b>Primitive Types:</b> <code>Number</code>, <code>String</code>, <code>Boolean</code>, <code>Null</code>, <code>Undefined</code>.</li>
                        <li><b>Object Types:</b> Collections of data like Arrays, and more complex structures. Functions are also a special type of object.</li>
                    </ul>
                    <h3 class="text-2xl font-bold mt-8 mb-4">Control Statements</h3>
                    <p>Control statements allow you to execute code based on certain conditions.</p>
                    <pre><code class="language-js">let x = 20;
if (x > 10) {
  console.log("Greater");
} else {
  console.log("Smaller");
}</code></pre>`},
                { title: 'Functions, Events & Key Concepts', videoUrl: 'https://www.youtube.com/embed/N8ap4k_1QEQ', notes: `
                    <h3 class="text-2xl font-bold mb-4">Functions</h3>
                    <p>Functions are reusable blocks of code that perform a specific task. They are defined with the <code>function</code> keyword and can accept parameters (inputs) and return a value (output).</p>
                    <pre><code class="language-js">function add(a, b) {
  return a + b;
}
let sum = add(5, 3); // sum is now 8
console.log(sum);</code></pre>
                    <h3 class="text-2xl font-bold mt-8 mb-4">Events</h3>
                    <p>JavaScript is event-driven, meaning it can respond to user actions. You can "listen" for events on HTML elements and execute a function when the event occurs.</p>
                    <div class="example-box">
                        <h4 class="font-bold mb-2">📌 Example: Handling a Button Click</h4>
                        <p>First, your HTML:</p>
                        <pre><code class="language-html">&lt;button id="myButton"&gt;Click Me&lt;/button&gt;</code></pre>
                        <p class="mt-2">Then, your JavaScript to attach an event listener:</p>
                        <pre><code class="language-js">document.getElementById("myButton").addEventListener("click", function() {
  alert("Welcome to JavaScript!");
});</code></pre>
                    </div>
                    <h3 class="text-2xl font-bold mt-8 mb-4">Important Concepts</h3>
                    <ul class="list-disc list-inside space-y-2">
                        <li><b>Variables:</b> Use <code>let</code> for variables that will change and <code>const</code> for constants that won't. Avoid using <code>var</code>.</li>
                        <li><b>Loops:</b> Use <code>for</code> and <code>while</code> loops to repeat actions.</li>
                        <li><b>Objects:</b> Key-value pairs used to store related data, e.g., <code>{name: "Aryan", age: 20}</code>.</li>
                        <li><b>Array Methods:</b> Powerful built-in methods like <code>map()</code>, <code>filter()</code>, and <code>forEach()</code> for working with lists of data.</li>
                    </ul>`}
            ]
        },
        {
            id: 'dom',
            title: 'DOM Manipulation',
            imageUrl: 'https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/187090/Originals/DOM%20l%C3%A0%20g%C3%AC_h%C3%ACnh%202.jpg',
            description: 'Learn to dynamically control your webpage content. Select, modify, create, and delete HTML elements using JavaScript.',
            lessons: [
                { title: 'Accessing & Changing the DOM', videoUrl: 'https://www.youtube.com/embed/y17RuWkWdn8', notes: `
                    <h3 class="text-2xl font-bold mb-4">Introduction to the DOM</h3>
                    <p>The DOM (Document Object Model) is an API for HTML documents. It represents the page's structure as a tree of objects, where each object corresponds to a part of the document (like an element, attribute, or text). JavaScript can access and manipulate these objects to dynamically change what the user sees on the page.</p>
                    <h3 class="text-2xl font-bold mt-8 mb-4">Accessing Elements</h3>
                    <p>Before you can change an element, you must first select it. JavaScript provides several methods to do this:</p>
                    <ul class="list-disc list-inside space-y-2">
                        <li><code>document.getElementById("id")</code>: Selects a single element by its unique ID.</li>
                        <li><code>document.getElementsByClassName("class")</code>: Selects a collection of all elements that have a specific class.</li>
                        <li><code>document.querySelector(".class #id")</code>: A versatile method that uses CSS selector syntax to find the first matching element.</li>
                    </ul>
                    <h3 class="text-2xl font-bold mt-8 mb-4">Changing Content and Styles</h3>
                    <p>Once an element is selected, you can modify its content or appearance:</p>
                    <ul class="list-disc list-inside space-y-2">
                        <li><b>Content:</b> Change the text inside an element with <code>element.textContent</code> or change the entire HTML structure inside it with <code>element.innerHTML</code>.</li>
                        <li><b>Styles:</b> Modify an element's inline CSS using the <code>style</code> property (e.g., <code>element.style.color = "red";</code>).</li>
                    </ul>
                    <pre><code class="language-js">// Select the element with the ID "demo"
let myElement = document.getElementById("demo");

// Change its content
myElement.innerHTML = "Hello DOM!";

// Change its style
myElement.style.fontSize = "24px";</code></pre>`},
                { title: 'DOM Event Handling', videoUrl: 'https://www.youtube.com/embed/XF1_MlZ5l6M', notes: `
                    <h3 class="text-2xl font-bold mb-4">Event Handling</h3>
                    <p>Event handling is the process of responding to user actions. The DOM allows you to attach functions (event handlers) to elements that will run when a specific event occurs.</p>
                    <p>The modern approach is to use the <code>addEventListener()</code> method, as it allows multiple event handlers for a single event.</p>
                    <pre><code class="language-js">let myButton = document.getElementById("btn");

myButton.addEventListener("click", function() {
  alert("Button was clicked!");
});</code></pre>
                    <p>You can also assign a function directly to an element's <code>onclick</code> property, but this only allows one handler.</p>
                    <pre><code class="language-js">document.getElementById("btn").onclick = function() {
  alert("Button was clicked!");
};</code></pre>
                    <div class="example-box">
                        <h4 class="font-bold mb-2">📌 Example: Interactive Text Change</h4>
                        <p>This example combines selecting an element, changing its content, and handling a click event.</p>
                        <p class="mt-2">HTML:</p>
                        <pre><code class="language-html">&lt;p id="demo"&gt;Original Text&lt;/p&gt;
&lt;button id="changeBtn"&gt;Change&lt;/button&gt;</code></pre>
                        <p class="mt-2">JavaScript:</p>
                        <pre><code class="language-js">const demoP = document.getElementById("demo");
const changeBtn = document.getElementById("changeBtn");

function changeText() {
  demoP.innerHTML = "Text Changed!";
  demoP.style.color = "green";
}

changeBtn.addEventListener("click", changeText);
</code></pre>
                    </div>`}
            ]
        },
        {
            id: 'git-github',
            title: 'Git & GitHub for Beginners',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
            description: 'Master version control. Collaborate with other developers and manage your codebase like a professional using Git and GitHub.',
            lessons: [
                { title: 'Introduction to Git', videoUrl: 'https://www.youtube.com/embed/RGOj5yH7evk', notes: `
                    <h3 class="text-2xl font-bold mb-4">What is Git?</h3>
                    <p>Git is a distributed version control system (VCS) that tracks changes in your code over time. It allows you to save "snapshots" (commits) of your project, revert to previous versions, and see who changed what and when. It is an essential tool for any developer.</p>
                    <h3 class="text-2xl font-bold mt-8 mb-4">Core Git Commands</h3>
                    <ul class="list-disc list-inside space-y-2">
                        <li><code>git init</code>: Initializes a new, empty Git repository in your current project folder.</li>
                        <li><code>git status</code>: Shows the current state of your files—which are modified, which are staged, etc.</li>
                        <li><code>git add &lt;file&gt;</code>: Adds a file to the "staging area," preparing it for the next commit. Use <code>git add .</code> to stage all changes.</li>
                        <li><code>git commit -m "message"</code>: Takes all staged files and saves them as a new snapshot in your project's history. The message should be a short description of the changes.</li>
                        <li><code>git log</code>: Displays a history of all the commits you have made.</li>
                    </ul>
                    <div class="example-box">
                        <h4 class="font-bold mb-2">📌 Example: First Commit</h4>
                        <pre><code class="language-shell"># Navigate to your project folder
cd my-project

# Initialize a Git repository
git init

# Create a new file and add it
touch index.html
git add index.html

# Commit the new file
git commit -m "First commit: Add index.html"</code></pre>
                    </div>`
                },
                { title: 'GitHub & Collaboration', videoUrl: 'https://www.youtube.com/embed/8JJ101D3knE', notes: `
                    <h3 class="text-2xl font-bold mb-4">What is GitHub?</h3>
                    <p>GitHub is a cloud-based platform that hosts your Git repositories. While Git is the tool for version control, GitHub is the service that stores your projects and enables collaboration with other developers.</p>
                    <h3 class="text-2xl font-bold mt-8 mb-4">Common Workflow</h3>
                    <p>The typical workflow involves keeping your local repository in sync with the remote repository on GitHub.</p>
                    <ol class="list-decimal list-inside space-y-2">
                        <li><b>Create a repository on GitHub.</b></li>
                        <li><b>Clone it:</b> Download the repository to your local machine with <code>git clone &lt;url&gt;</code>.</li>
                        <li><b>Make Changes:</b> Edit your code locally.</li>
                        <li><b>Add & Commit:</b> Use <code>git add .</code> and <code>git commit -m "message"</code> to save your changes locally.</li>
                        <li><b>Push Changes:</b> Upload your local commits to GitHub with <code>git push origin main</code>.</li>
                    </ol>
                    <h3 class="text-2xl font-bold mt-8 mb-4">Collaboration Features</h3>
                    <p>GitHub's power lies in its collaborative tools:</p>
                      <ul class="list-disc list-inside space-y-2">
                        <li><b>Branching:</b> Create separate branches (e.g., <code>git branch new-feature</code>) to work on features without affecting the main codebase.</li>
                        <li><b>Pull Requests (PRs):</b> When your feature is complete, you can open a Pull Request on GitHub. This is a formal request to merge your changes into the main branch, allowing for code review and discussion.</li>
                        <li><b>Forks:</b> Create a personal copy (a "fork") of someone else's repository. This allows you to experiment freely or prepare changes to contribute back to the original project via a pull request.</li>
                      </ul>`}
            ]
        },
    ];

    // --- DOM Elements for Page Routing ---
    const homeLinkLogo = document.getElementById('home-link-logo');
    const mainContent = document.getElementById('main-content');
    const coursePlayerPage = document.getElementById('course-player-page');
    const resourcesPage = document.getElementById('resources-page');
    const quizPage = document.getElementById('quiz-page');
    const courseGrid = document.getElementById('course-grid');
    const coursePlayerTitle = document.getElementById('course-player-title');
    const backToCoursesBtn = document.getElementById('back-to-courses-btn');
    const backToHomeBtnResources = document.getElementById('back-to-home-btn-resources');
    const backToHomeBtnQuiz = document.getElementById('back-to-home-btn-quiz');
    const resourcesLinkDesktop = document.getElementById('resources-link-desktop');
    const resourcesLinkMobile = document.getElementById('resources-link-mobile');
    const quizLinkDesktop = document.getElementById('quiz-link-desktop');
    const quizLinkMobile = document.getElementById('quiz-link-mobile');
    const goToQuizBtn = document.getElementById('go-to-quiz-btn');
    
    const resourcesMenu = document.getElementById('resources-menu');
    const resourcesGrid = document.getElementById('resources-grid');
    const resourcesDetail = document.getElementById('resources-detail');
    const resourcesDetailTitle = document.getElementById('resources-detail-title');
    const resourcesDetailContent = document.getElementById('resources-detail-content');
    const backToResourcesMenuBtn = document.getElementById('back-to-resources-menu-btn');
    
    const quizIntroScreen = document.getElementById('quiz-intro-screen');
    const quizAppContainer = document.getElementById('quiz-app-container');

    const lessonList = document.getElementById('lesson-list');
    const videoPlayer = document.getElementById('video-player');
    const lessonTitle = document.getElementById('lesson-title');
    const lessonNotes = document.getElementById('lesson-notes');
    let currentCourse = null;

    // --- PAGE ROUTING LOGIC ---

    const showPage = (pageToShow) => {
        mainContent.classList.add('hidden');
        coursePlayerPage.classList.remove('flex'); // Remove flex before adding hidden
        coursePlayerPage.classList.add('hidden');
        resourcesPage.classList.remove('flex');
        resourcesPage.classList.add('hidden');
        quizPage.classList.remove('flex');
        quizPage.classList.add('hidden');
        if (pageToShow) {
            pageToShow.classList.remove('hidden');
        }
    };

    const selectLesson = (lessonIndex) => {
        if (!currentCourse || !currentCourse.lessons[lessonIndex]) return;
        const lesson = currentCourse.lessons[lessonIndex];
        videoPlayer.src = lesson.videoUrl || '';
        lessonTitle.textContent = lesson.title;
        lessonNotes.innerHTML = lesson.notes;
        const lessonItems = lessonList.querySelectorAll('.lesson-item');
        lessonItems.forEach((item, index) => {
            item.classList.toggle('active', index === lessonIndex);
        });
    };

    const openCoursePage = (courseId) => {
        const course = courses.find(c => c.id === courseId);
        if (!course) { showHomePage(); return; }
        currentCourse = course;
        
        showPage(coursePlayerPage);
        coursePlayerPage.classList.add('flex');
        window.scrollTo(0,0);

        coursePlayerTitle.textContent = course.title;
        lessonList.innerHTML = course.lessons.map((lesson, index) => `
            <li>
                <button class="lesson-item w-full text-left p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" data-lesson-index="${index}">
                    <span class="font-medium">${lesson.title}</span>
                </button>
            </li>
        `).join('');
        selectLesson(0);
        lucide.createIcons();
    };

    const showResourcesMenu = () => {
        resourcesMenu.classList.remove('hidden');
        resourcesDetail.classList.add('hidden');
    };

    const showResourceNotes = (courseId) => {
        const course = courses.find(c => c.id === courseId);
        if (!course) return;

        resourcesDetailTitle.textContent = course.title;
        const lessonsHtml = course.lessons.map(lesson => `
            <article>
                <h4 class="text-xl md:text-2xl font-bold mb-4">${lesson.title}</h4>
                <div class="prose dark:prose-invert max-w-none">${lesson.notes}</div>
            </article>
        `).join('<hr class="border-[var(--border)] my-12">');
        
        resourcesDetailContent.innerHTML = lessonsHtml;
        
        resourcesMenu.classList.add('hidden');
        resourcesDetail.classList.remove('hidden');
        window.scrollTo(0,0);
    };

    const openResourcesPage = () => {
        showPage(resourcesPage);
        resourcesPage.classList.add('flex');
        showResourcesMenu();
        window.scrollTo(0, 0);

        // Render resource cards if not already rendered
        if (resourcesGrid.innerHTML.trim() === '') {
            courses.forEach(course => {
                const card = document.createElement('button');
                card.className = 'resource-card card rounded-xl shadow-sm flex flex-col items-center justify-center p-8 gap-4 hover:border-[var(--primary)] hover:-translate-y-1 transition-all duration-300 group';
                card.dataset.courseId = course.id;

                let imageClasses = "h-20 object-contain";
                if(course.id === 'git-github') {
                     imageClasses += ' dark:invert';
                }
                
                card.innerHTML = `
                    <img src="${course.imageUrl}" alt="${course.title} Logo" class="${imageClasses}" />
                    <h3 class="text-xl font-bold text-center">${course.title}</h3>
                `;
                resourcesGrid.appendChild(card);
            });
        }
    };

    const openQuizPage = () => {
        showPage(quizPage);
        quizPage.classList.add('flex');
        quizIntroScreen.classList.remove('hidden');
        quizAppContainer.classList.add('hidden');
        window.scrollTo(0, 0);
    }
    
    const showHomePage = () => {
        showPage(mainContent);
        videoPlayer.src = '';
        currentCourse = null;
    }

    // --- INITIAL RENDER & EVENT LISTENERS ---
    // Render initial course cards for the home page
    courses.forEach(course => {
        const card = document.createElement('a');
        card.href = `#course/${course.id}`;
        card.className = 'course-card card rounded-xl shadow-sm flex flex-col items-start gap-0 hover:border-[var(--primary)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden';
        card.dataset.courseId = course.id;
        
        let imageClasses = "max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105";
        let imageContainerClasses = "w-full aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900 p-6 flex items-center justify-center";
        
        if(course.id === 'git-github') { imageClasses += ' dark:invert'; }
        if(course.id === 'dom') {
            imageContainerClasses = "w-full aspect-[16/10] overflow-hidden";
            imageClasses = "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105";
        }

        card.innerHTML = `
            <div class="${imageContainerClasses}">
                <img src="${course.imageUrl}" alt="${course.title} Logo" class="${imageClasses}" />
            </div>
            <div class="p-6 flex flex-col items-start gap-4 flex-grow w-full">
                <h3 class="text-xl font-bold">${course.title}</h3>
                <p class="flex-grow">${course.description}</p>
                <span class="mt-auto font-semibold text-[var(--primary)] flex items-center gap-2">
                    Start Learning <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </span>
            </div>
        `;
        courseGrid.appendChild(card);
    });
    lucide.createIcons();
    
    // Add event listeners for course navigation
    courseGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.course-card');
        if (card) {
            e.preventDefault();
            const courseId = card.dataset.courseId;
            history.pushState({ courseId: courseId }, '', `#course/${courseId}`);
            openCoursePage(courseId);
        }
    });
    
    lessonList.addEventListener('click', (e) => {
        const lessonItem = e.target.closest('.lesson-item');
        if (lessonItem) {
            const lessonIndex = parseInt(lessonItem.dataset.lessonIndex, 10);
            selectLesson(lessonIndex);
        }
    });

    resourcesGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.resource-card');
        if (card) {
            const courseId = card.dataset.courseId;
            showResourceNotes(courseId);
        }
    });

    // Back Buttons
    backToCoursesBtn.addEventListener('click', showHomePage);
    backToHomeBtnResources.addEventListener('click', showHomePage);
    backToHomeBtnQuiz.addEventListener('click', showHomePage);
    homeLinkLogo.addEventListener('click', (e) => { e.preventDefault(); history.pushState({page: 'home'}, '', window.location.pathname); showHomePage(); });
    backToResourcesMenuBtn.addEventListener('click', showResourcesMenu);

    // Header Navigation Links
    resourcesLinkDesktop.addEventListener('click', (e) => { e.preventDefault(); history.pushState({ page: 'resources' }, '', '#resources'); openResourcesPage(); });
    resourcesLinkMobile.addEventListener('click', (e) => { e.preventDefault(); history.pushState({ page: 'resources' }, '', '#resources'); openResourcesPage(); });
    quizLinkDesktop.addEventListener('click', (e) => { e.preventDefault(); history.pushState({ page: 'quiz' }, '', '#quiz'); openQuizPage(); });
    quizLinkMobile.addEventListener('click', (e) => { e.preventDefault(); history.pushState({ page: 'quiz' }, '', '#quiz'); openQuizPage(); });
    
    goToQuizBtn.addEventListener('click', () => {
        quizIntroScreen.classList.add('hidden');
        quizAppContainer.classList.remove('hidden');
        // Ensure quiz is reset to its start screen
        document.getElementById('score-container').style.display = 'none';
        document.getElementById('quiz-screen').style.display = 'none';
        document.getElementById('start-screen').style.display = 'flex';
    });

    // --- BROWSER HISTORY & INITIAL LOAD ---
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.courseId) { openCoursePage(e.state.courseId); } 
        else if (e.state && e.state.page === 'resources') { openResourcesPage(); } 
        else if (e.state && e.state.page === 'quiz') { openQuizPage(); }
        else { showHomePage(); }
    });

    const currentHash = window.location.hash;
    if (currentHash && currentHash.startsWith('#course/')) { openCoursePage(currentHash.substring(8)); } 
    else if (currentHash === '#resources') { openResourcesPage(); } 
    else if (currentHash === '#quiz') { openQuizPage(); }
    else { showHomePage(); }

    // --- QUIZ SCRIPT LOGIC (Self-Executing Function for Isolation) ---
    (() => {
        const allQuestions = {
            html: [
                { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language", "Home Tool Markup", "Hyperlink Text Language", "HighText Machine Language"], ans: 0 },
                { q: "Which HTML tag inserts a line break?", opts: ["<hr>", "<br>", "<break>", "<lb>"], ans: 1 },
                { q: "Which attribute adds a link in <a> tag?", opts: ["src", "href", "link", "rel"], ans: 1 },
                { q: "Which tag is used for a paragraph?", opts: ["<p>", "<para>", "<text>", "<div>"], ans: 0 },
                { q: "How do you apply an internal CSS style?", opts: ["<style>", "<css>", "<script>", "<link>"], ans: 0 },
                { q: "CSS property to change font size?", opts: ["text-size", "font-size", "size", "font"], ans: 1 },
                { q: "Which CSS selector targets all paragraphs?", opts: ["*", "p", "para", "."], ans: 1 },
                { q: "To make text bold, you use?", opts: ["<strong>", "<b>", "Both A and B", "<bold>"], ans: 2 },
                { q: "How do you comment in CSS?", opts: ["// comment", "/* comment */", "..comment..", "## comment"], ans: 1 },
                { q: "Which tag creates an ordered list?", opts: ["<ol>", "<ul>", "<li>", "<list>"], ans: 0 }
            ],
            js: [
                { q: "Which keyword declares a variable in JavaScript?", opts: ["var", "int", "let", "Both var and let"], ans: 3 },
                { q: "What symbol ends a JavaScript statement?", opts: [";", ":", ".", ","], ans: 0 },
                { q: "How do you write a single-line comment in JavaScript?", opts: ["/* */", "", "//", "#"], ans: 2 },
                { q: "What is 'typeof []' in JavaScript?", opts: ["object", "array", "list", "undefined"], ans: 0 },
                { q: "Which method converts a string to lowercase?", opts: ["toUpperCase()", "lowerCase()", "toLowerCase()", "changeCase()"], ans: 2 },
                { q: "What does NaN stand for?", opts: ["Not a Number", "New and Null", "No assigned Name", "Name and Number"], ans: 0 },
                { q: "How do you define a function?", opts: ["def myFunc()", "function myFunc()", "func myFunc()", "define myFunc()"], ans: 1 },
                { q: "What is the result of '2' + 2?", opts: ["22", "4", "NaN", "Error"], ans: 0 },
                { q: "Which array method removes the last item?", opts: ["pop()", "shift()", "remove()", "splice()"], ans: 0 },
                { q: "Which value is falsy in JavaScript?", opts: ["0", "false", "null", "All of the above"], ans: 3 }
            ]
        };

        let questions = [], curIndex = 0, score = 0, time = 10, timerId, userName = '', Qcount = 0;
        
        const startScreen = document.getElementById('start-screen');
        const quizScreen = document.getElementById('quiz-screen');
        const scoreContainer = document.getElementById('score-container');
        const quesEl = document.getElementById('question');
        const optsEl = document.getElementById('options');
        const feedback = document.getElementById('feedback');
        const nextBtn = document.getElementById('next-btn');
        const finalScore = document.getElementById('final-score');
        const ringFill = document.querySelector('.timer-ring-fill');
        const fullDash = 2 * Math.PI * 45; // Circumference of the timer ring
        const message = document.getElementById('message');
        const startQuizBtn = document.getElementById('start-quiz-btn');
        const restartQuizBtn = document.getElementById('restart-quiz-btn');

        function startQuiz() {
            const nameInput = document.getElementById('user-name').value.trim();
            const selectedCategory = document.getElementById('category').value;
            if (!nameInput || !selectedCategory) {
                alert("Please enter your name and select a quiz category.");
                return;
            }
            userName = nameInput;
            questions = allQuestions[selectedCategory];
            Qcount = questions.length;
            curIndex = 0;
            score = 0;
            startScreen.style.display = 'none';
            quizScreen.style.display = 'flex';
            loadQ();
        }

        function loadQ() {
            feedback.textContent = '';
            feedback.className = '';
            nextBtn.disabled = true;
            document.getElementById('progress-text').textContent = `Question ${curIndex + 1} of ${Qcount}`;
            document.getElementById('progress-fill').style.width = ((curIndex) / Qcount * 100) + '%';
            const curr = questions[curIndex];
            quesEl.textContent = curr.q;
            optsEl.innerHTML = '';
            curr.opts.forEach((o, i) => {
                const li = document.createElement('li');
                li.textContent = o;
                li.onclick = () => selectOpt(i);
                optsEl.appendChild(li);
            });
            startTimer();
        }

        function startTimer() {
            time = 10;
            if(ringFill) {
                ringFill.style.transition = 'none';
                ringFill.style.strokeDasharray = fullDash;
                ringFill.style.strokeDashoffset = 0;
                setTimeout(() => { ringFill.style.transition = 'stroke-dashoffset 1s linear'; }, 50);
            }
            clearInterval(timerId);
            timerId = setInterval(() => {
                time--;
                const offset = fullDash * (time / 10);
                if(ringFill) ringFill.style.strokeDashoffset = fullDash - offset;
                if (time <= 0) {
                    clearInterval(timerId);
                    skipQuestion();
                }
            }, 1000);
        }

        function selectOpt(idx) {
            clearInterval(timerId);
            const correct = questions[curIndex].ans;
            Array.from(optsEl.children).forEach((li, i) => {
                li.classList.add(i === correct ? 'correct' : 'wrong');
                li.style.pointerEvents = 'none';
            });
            
            if (idx === correct) {
                feedback.textContent = "✔ Correct!";
                feedback.className = 'correct';
                score++;
            } else {
                feedback.textContent = "✖ Wrong!";
                feedback.className = 'wrong';
            }

            nextBtn.disabled = false;
        }

        function skipQuestion() {
            feedback.textContent = "⏰ Time's up!";
            feedback.className = 'wrong';
            const correct = questions[curIndex].ans;
            Array.from(optsEl.children).forEach((li, i) => {
                li.classList.add(i === correct ? 'correct' : 'wrong');
                li.style.pointerEvents = 'none';
            });
            nextBtn.disabled = false;
        }

        nextBtn.onclick = () => {
            curIndex++;
            if (curIndex < Qcount) loadQ();
            else showScore();
        };

        function showScore() {
            quizScreen.style.display = 'none';
            scoreContainer.style.display = 'flex';
            document.getElementById('progress-fill').style.width = "100%";
            finalScore.textContent = `${userName}, your score: ${score} out of ${Qcount}`;
            message.textContent = score >= (Qcount * 0.7)
                ? "🎉 Great job! You really know your stuff!"
                : "💪 Keep practicing! You can do better next time!";
        }

        function restartQuiz() {
            scoreContainer.style.display = 'none';
            startScreen.style.display = 'flex';
        }

        startQuizBtn.addEventListener('click', startQuiz);
        restartQuizBtn.addEventListener('click', restartQuiz);
    })();
});