---
layout: post
title: "Mahoutsukai no Yoru Support Page"
active_tab: blog
permalink: "/projects/mahoyo/support.html"
date: 2020-09-22 12:00:00 +0000
---

[← Back to project page]({{ "/projects/mahoyo.html" | relative_url }})

# The game freezes with looping sound effects

First, please check that your sound card drivers are up to date.  
If that does not work, check Audio Playback Details in the "Multimedia" or "Sounds and Multimedia" settings in the Control Panel.  
Reduce the hardware acceleration setting from "Maximum" until you found a setting that will not cause the freezing issue.  
\* This issue may occur with on-board sound or sound cards equipped with the CMI8738 chip.

# The title menu is not shown

The title menu will show once the opening movie has been played.

# A "Authentication failed: unrecognized kernel32 module. / NM" or "The Mahoutsukai no Yoru install disc could not be found" error is shown

Extract [this archive](https://cdn.discordapp.com/attachments/636713186044805123/747237694723326042/WOHN_cxdec_nokernel32_nocd_noexe.tpm.7z) using [7-zip](https://www.7-zip.org/), then replace `魔法使いの夜.tpm` in the `plugin` folder of the installation directory with the contents of the archive.

# A "Cannot load Plugin stringUtil.dll" error is shown

Create a new local Windows account that does not have any accented characters in it, then run the game under that account.

# A "There is not enough space on MAHOYO" error appears when attempting to install the patch.

Grab the folder `魔法使いの夜` and drop it on the Desktop or another folder of your choosing.  
Install the patch in the copy of the folder `魔法使いの夜`.

# When installing the game, the progress bar is stuck or characters are garbled

Cancel and close the installer, open the game disc in Windows Explorer, then grab the folder `魔法使いの夜` and drop it on the Desktop or another folder of your choosing.  
If there is an error when copying the files, you may have a defective disc or disc drive. In this case, please try a different disc drive and see if the issue persists.  
Once the copy is successful, it is now possible to run the game from that folder.

# After changing the engine settings, it is no longer possible to start the game

The engine settings are meant to be changed when the game does not work due to the specifications of the hardware.  
In general, it is not necessary to change the settings.

The recommended engine settings are the following:

-   Generic->Process wait: 60Hz
-   Graphics->Divided processing of graphics rendering: Disabled
-   Graphics->Graphics rendering thread count: Auto(equal to processor count)

The rest of the settings should be set to the one marked with a \* symbol on the left side of the setting.

# My PC freezes or shuts down while playing

In this case, there may be an issue with the hardware or drivers installed in your system.  
Please check the following:

## Check if the OS and drivers are up-to-date

Please run Windows Update to ensure that Windows is up-to-date.  
Also, update the drivers for graphics cards and other attached devices.

## Check if there is an issue with memory

Please use [MemTest86](https://www.memtest86.com/) to check the memory installed in your system.

## Check if there is an issue with the hard disk

Please [follow the steps](https://support.microsoft.com/en-us/help/2641432/check-your-hard-disk-for-errors-in-windows-7) to check the hard disk for errors.

## Reduce the number of cores used

Since the game uses all the cores in the CPU by default, it may be possible to overheat the CPU if the cooling is not sufficient.  
In that case, please open the engine settings and set "Graphics->Graphics rendering thread count" to "1 thread".

# How can I quickly locate the save data folder

To quickly open a File Browser window to that folder, press Win+R, type in `%userprofile%\Documents\TYPE-MOON\魔法使いの夜`, then press enter on your keyboard.  
Please note that the above command does not work if your system administrator has Folder Redirection enabled on your system. In that case, open the "Documents" folder in "File Explorer" and locate the `TYPE-MOON` folder.

# I would like to continue the game using another computer

The `TYPE-MOON\魔法使いの夜` folder in the "My Documents" folder can be transferred to another computer.

# When the game is full-screen, the screen is letterboxed

The game was designed with a resolution of 1024x576, so there will be empty spaces at the edge of the screen if your screen's resolution differs.

# The screen display is slow while the hard disk is frequently accessed

If there is not enough memory as specified by the system requirements or if other applications are open and using memory, the required memory cannot be completely used by the game, so disk access will ensure due to the usage of swap.  
In this case, please install more memory in your system.

# The display is slow, so the game is not enjoyable

In this game, there is a large amount of image processing on the CPU, so more processing power is needed.
To reduce the processing needed, in Sound/Effect turn off "Special Effects" and in System set "New Text Settings" and "Old Text Settings" to "None".  
If the performance is still not acceptable, please use a PC with a higher CPU clock speed and higher amount of cores.

# I found a typo in the translation

Please post what you found in the #project-feedback channel in the [Hollow Moon Discord server](https://discord.gg/2ngdyQd).

# Characters are not displayed in some parts of the game

This is an intended part of the game.

# Other support pages

If the above does not help with your issue, you can ask in the [Beast's Lair forum thread](https://forums.nrvnqsr.com/showthread.php/8586) or the [Discord server](https://discord.gg/2ngdyQd).

[← Back to project page]({{ "/projects/mahoyo.html" | relative_url }})
