# GitHub Integration Guide for Your Website

Using GitHub to host your website's assets (like images, sounds, and even your web apps) is a smart and common practice. This guide will walk you through the entire process, from setting up your project on GitHub to linking everything in your code.

---

### **Part 1: Setting Up Your Project on GitHub**

First, we need to get your `diyskateramp` project onto GitHub.

1.  **Create a GitHub Account:** If you don't have one, sign up at [github.com](https://github.com).
2.  **Create a New Repository:**
    *   On the GitHub website, click the `+` icon in the top-right corner and select "New repository".
    *   **Repository name:** `diyskateramp` (or another name you prefer).
    *   **Description:** "My personal portfolio website for my web apps."
    *   **Public/Private:** Choose **Public**. This is required for the assets to be easily accessible by your website.
    *   Click "Create repository".
3.  **Upload Your Project Files:**
    *   On your new repository page, click the "Add file" button and select "Upload files".
    *   Drag and drop your entire `diyskateramp` folder (including the `apps`, `audio`, and `images` subfolders) into the upload area.
    *   Wait for all the files to upload, then scroll down and click "Commit changes".

Your entire project is now stored on GitHub!

---

### **Part 2: Linking Your GitHub Assets in Your Code**

Now, we need to tell your website where to find the files on GitHub. The key is using the correct URL format provided by GitHub for raw file access.

The URL format is: `https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME/main/PATH_TO_FILE`

Let's break down how to update each type of asset.

#### **A. Linking Images**

Let's say you have an image for your YouTube thumbnail located at `images/pipe-dreams-thumb.jpg`.

1.  **Find the file path:** `images/pipe-dreams-thumb.jpg`
2.  **Construct the full URL:** `https://raw.githubusercontent.com/your-github-username/diyskateramp/main/images/pipe-dreams-thumb.jpg`
3.  **Update your HTML:** In a file like `pipe-dreams.html`, you would find the `youtube-thumbnail` div and add an `<img>` tag:

    ```html
    <!-- Before -->
    <div class="youtube-thumbnail">
        <!-- YouTube thumbnail image will go here -->
    </div>

    <!-- After -->
    <div class="youtube-thumbnail">
        <img src="https://raw.githubusercontent.com/your-github-username/diyskateramp/main/images/pipe-dreams-thumb.jpg" alt="Pipe Dreams Thumbnail">
    </div>
    ```
    *You'll also need to add a simple CSS rule to your `style.css` file: `.youtube-thumbnail img { width: 100%; height: 100%; object-fit: cover; }`*

#### **B. Linking Sounds**

This works exactly the same way. You'll update the paths in your `script.js` file.

1.  **Find the file paths:** `audio/click.wav`, `audio/load1.wav`, etc.
2.  **Construct the full URLs.**
3.  **Update your `script.js` file:**

    ```javascript
    // Before
    const clickSound = new Audio('audio/click.wav');
    const loadSounds = [
        'audio/load1.wav',
        'audio/load2.wav'
    ];

    // After
    const clickSound = new Audio('https://raw.githubusercontent.com/your-github-username/diyskateramp/main/audio/click.wav');
    const loadSounds = [
        'https://raw.githubusercontent.com/your-github-username/diyskateramp/main/audio/load1.wav',
        'https://raw.githubusercontent.com/your-github-username/diyskateramp/main/audio/load2.wav'
    ];
    ```

#### **C. Linking Your Web Apps (iframes)**

This is the most important one. You need to update the `src` attribute of each `<iframe>` tag.

1.  **Find the file path:** `apps/pipe-dreams/index.html`
2.  **Construct the full URL:** `https://raw.githubusercontent.com/your-github-username/diyskateramp/main/apps/pipe-dreams/index.html`
3.  **Update your HTML:** In `pipe-dreams.html`, for example:

    ```html
    <!-- Before -->
    <iframe src="apps/pipe-dreams/index.html" title="PIPE DREAMS App"></iframe>

    <!-- After -->
    <iframe src="https://raw.githubusercontent.com/your-github-username/diyskateramp/main/apps/pipe-dreams/index.html" title="PIPE DREAMS App"></iframe>
    ```
    You will need to do this for every `<iframe>` on every app page.

---

### **Part 3: Recommendations & Best Practices**

Here are a few extra tips to help you out:

*   **GitHub Pages for Hosting:** While you mentioned buying a domain, you should know that GitHub offers a free web hosting service called **GitHub Pages**. It can serve your entire website directly from your repository. This is a great option for personal projects and can save you money on a separate hosting provider. You can even connect your custom domain name to it for free!
*   **Image Compression:** Large image files can slow down your website. Before uploading your images to GitHub, use a free online tool like [TinyPNG](https://tinypng.com/) to compress them. This will make your pages load much faster without sacrificing much quality.
*   **YouTube Links:** Instead of just a generic link, you can get the specific "thumbnail" URL for any YouTube video. For a video with an ID of `VIDEO_ID`, the thumbnail is at `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`. This looks much more professional than a blank box.
*   **Keep Your Code Clean:** As you add more content, remember to keep your HTML, CSS, and JavaScript files organized. Use comments to explain what different parts of your code do.
*   **Activate Your Contact Form:** The contact form in the footer uses a service called [Formspree](https://formspree.io/) to send you emails. To make it work:
    1. Go to the Formspree website and create a new form.
    2. It will give you a unique URL that looks something like `https://formspree.io/f/xxxxxxxx`.
    3. In every `.html` file, find the line `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`.
    4. Replace `YOUR_FORM_ID` with the unique ID you got from Formspree.
    5. After you update the code, open your live website and send a test message from the contact form. You will receive a confirmation email from Formspree. Click the link in that email to activate the form. From then on, all submissions will go directly to your inbox.

This guide should give you a solid foundation for integrating your project with GitHub.