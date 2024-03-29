# Migration

This document will walk through migrating from v1 to v2 of our foundation packages.

## What has changed

As of `@coopdigital/foundations@1.0.1` There have been no code level changes across the packages. The breaking change is that we have combined the separate packages into one. If you install a later version of foundations you will be subject to code changes and will require further testing. See the [changelog](../packages/foundations/CHANGELOG.md) for what those changes will be

## Step 1: Install v2 package

```bash
npm install @coopdigital/foundations
```

## Step 2: Import new foundations into your stylesheet

```css
@import "@coopdigital/foundations/dist/vars/vars.css";
@import "@coopdigital/foundations/dist/foundations.css";
```

## Step 3: Remove v1 imports from project styles sheets

```css
/* Remove these imports */
@import "@coopdigital/foundations-vars";
@import "@coopdigital/foundations-global";
@import "@coopdigital/foundations-typography";
@import "@coopdigital/foundations-grid";
@import "@coopdigital/foundations-colors";
@import "@coopdigital/foundations-layout";
```

## Step 4: Testing

At this point you will need to ensure there have been no visual changes. The CSS acr

## Uninstall v1 packages

```bash
npm uninstall @coopdigital/foundations-vars @coopdigital/foundations-global @coopdigital/foundations-typography @coopdigital/foundations-grid @coopdigital/foundations-colors @coopdigital/foundations-layout
```
