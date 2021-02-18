# Landing Page Project

## Table of Contents

* [Introduction](#introduction)
* [Functions] (#functions]

## Introduction

This is the complete Landing Page Project implementing all the requirments of the project rubic.

The main features include javascript to drive the webpage interactivity and responsive desgin implementation.

## Functions
This is a list of the javascript function driving the Landing Page project, along with a brief description of each one.

getSectionInView()
    Returns the section element which is closest to the top
    of the browser.

getMenuItems()
    Returns a list of menu items as an array of text.
    The list consists of 'Home' followed by a list of all the
    sections names present on the page.

createMenuLink(name)
    Returns a single <li> tag containing an <a> tag with the content set to (name) and a class attribute "menu__link".

addNavBarItems()
    Builds the navbar by calling createMenuLink(name) on all the item in the list returned by getMenuItems().

menuClickEventCallback(event)
    Triggered by a click event on one of the menu items.
    Hence, it's the callback function triggered when a menu item is clicked.
    It causes the page to scroll to the item selected in the menu.

setActiveSectionCallback(event)
    Triggered by a scroll event. 
    It sets a class attribute to "active" in the <section> tag which is nearest to the top of the page.