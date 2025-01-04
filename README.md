# React Router v6 Catch-all Route Conflict
This repository demonstrates a bug in React Router v6 where a catch-all route (`path="/*"`) conflicts with other defined routes, causing unexpected behavior. The issue arises when the catch-all route is placed after more specific routes. 

## Problem
The `path="/*" ` route should ideally only match when no other routes match. However, in this scenario, it seems to intercept all requests, including those intended for other defined routes. This leads to the `NotFound` component being rendered even when a valid route is available. 

## Solution
The solution is to move the catch-all route to be the first route listed.  This ensures it will only match if other routes fail to match. 