# How to Add Sounds to Your Website

This document explains how to add the two types of sound effects to your `diyskateramp` website: the navigation button click sound and the random page load sounds.

## 1. Create the 'audio' Folder

First, you need a place to store your sound files. Inside your main `diyskateramp` project folder, create a new folder and name it `audio`.

Your folder structure should now look like this:
```
diyskateramp/
|
|-- audio/             <-- Your new folder
|-- apps/
|-- index.html
|-- style.css
|-- script.js
|-- ... (and so on)
```

## 2. Adding the Button Click Sound

The website is programmed to look for a specific file to play when a navigation button is clicked.

1.  Find a short, 8-bit "click" or "blip" sound effect that you like. A `.wav` file is recommended, but `.mp3` or `.ogg` will also work.
2.  Rename the sound file to `click.wav`.
3.  Place this `click.wav` file inside your new `audio` folder.

That's it! The `script.js` file will automatically find and play this sound whenever a main navigation button is clicked.

## 3. Adding the Random Page Load Sounds

The website is set up to play a *random* sound from a list every time a new page is opened. You can add as many different sounds as you like to this list.

1.  Gather all the 8-bit page load sounds you want to use.
2.  Give them simple names (e.g., `load1.wav`, `load2.mp3`, `startup.ogg`, etc.).
3.  Place all of these sound files into your `audio` folder.
4.  **Open the `script.js` file.**
5.  Near the top of the file, you will see a section of code that looks like this:

    ```javascript
    const loadSounds = [
        'audio/load1.wav',
        'audio/load2.wav',
        'audio/load3.wav'
        // Add as many sounds as you like
    ];
    ```

6.  **Edit this list.** Change the file paths to match the names of the sound files you added to the `audio` folder. You can add or remove lines from this list. For example, if you have four sounds named `start1.wav`, `start2.wav`, `beep.mp3`, and `boop.ogg`, you would change the code to look like this:

    ```javascript
    const loadSounds = [
        'audio/start1.wav',
        'audio/start2.wav',
        'audio/beep.mp3',
        'audio/boop.ogg'
    ];
    ```

7.  Save the `script.js` file.

Now, every time you navigate to a new page on your site, the script will randomly pick one of the sounds from your list and play it.