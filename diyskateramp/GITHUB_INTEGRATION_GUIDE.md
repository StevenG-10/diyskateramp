# GitHub Integration Guide

This guide will walk you through the process of hosting your website and applications on GitHub Pages and linking them correctly.

## 1. Create a GitHub Repository

If you haven't already, create a new repository on GitHub. You can name it whatever you like, for example, `diyskateramp`.

## 2. Upload Your Project Files

Upload all your project files to the new repository. This includes all the `.html` files, the `style.css` file, the `apps` directory, and any other assets.

## 3. Enable GitHub Pages

1.  In your repository, go to **Settings**.
2.  In the left sidebar, click on **Pages**.
3.  Under **Branch**, select the `main` branch (or `master`, depending on your repository's default).
4.  Click **Save**.

GitHub will now build and deploy your website. It will be available at a URL like `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`.

## 4. Update the `<iframe>` `src` Attributes

Now you need to update the `src` attributes of the `<iframe>` tags in your main HTML files to point to the hosted application files on GitHub Pages.

For example, in [`pipe-dreams.html`](pipe-dreams.html), you would change:

```html
<iframe src="apps/pipe-dreams/index.html" title="PIPE DREAMS App"></iframe>
```

to:

```html
<iframe src="https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/apps/pipe-dreams/index.html" title="PIPE DREAMS App"></iframe>
```

You will need to do this for all the `<iframe>` tags in the following files:

*   [`pipe-dreams.html`](pipe-dreams.html)
*   [`bank-on-it.html`](bank-on-it.html)
*   [`ramp-hacker.html`](ramp-hacker.html)
*   [`coping-mechanism.html`](coping-mechanism.html)
*   [`ollie.html`](ollie.html)

Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPOSITORY_NAME` with the name of your repository.

Once you have made these changes, commit and push them to your repository. GitHub Pages will automatically redeploy your site with the updated links.