# Contributing to Root Things

Thank you for your interest in contributing to Root Things! We welcome contributions from everyone who wants to help improve the Android rooting community. This document provides guidelines and instructions for contributing to this project.

## Ways to Contribute

There are several ways you can contribute to the Root Things project:

1. **Add or update modules**: Submit new Magisk modules or updates to existing ones
2. **Create guides**: Write step-by-step guides for rooting devices or using root features
3. **Report bugs**: Help us identify and fix issues with the website
4. **Suggest enhancements**: Propose new features or improvements
5. **Improve the code**: Fix bugs or add features to the website itself

## Getting Started

### Setting Up the Development Environment

1. Fork the repository
2. Clone your fork to your local machine:
   ```bash
   git clone https://github.com/your-username/root-things.git
   cd root-things
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Project Structure

- `/src/app` - Next.js pages and app routes
- `/src/components` - React components organized by category
- `/public` - Static assets including modules and guide content
- `/public/modules` - Magisk module files and related assets
- `/public/guides` - Guide images and related assets

## Submitting Contributions

### Adding a New Module

1. Create a new branch in your fork:
   ```bash
   git checkout -b add-module-name
   ```

2. Use the [Module Submission Template](/.github/TEMPLATE_MODULE.md) to prepare your submission:
   - Copy the template to a new markdown file in `/src/app/modules/data/`
   - Name the file according to your module: `module-name.md`
   - Fill in all the required information

3. If your module has a ZIP file, add it to `/public/modules/`

4. If your module has screenshots, add them to `/public/modules/screenshots/`

5. Commit your changes:
   ```bash
   git add .
   git commit -m "Add module: ModuleName"
   ```

6. Push to your fork:
   ```bash
   git push origin add-module-name
   ```

7. Create a Pull Request to the main repository

### Adding a New Guide

1. Create a new branch in your fork:
   ```bash
   git checkout -b add-guide-name
   ```

2. Use the [Guide Submission Template](/.github/TEMPLATE_GUIDE.md) to prepare your submission:
   - Copy the template to a new markdown file in `/src/app/guides/data/`
   - Name the file according to your guide: `guide-name.md`
   - Fill in all the required information

3. If your guide has images, add them to `/public/guides/images/`

4. Commit your changes:
   ```bash
   git add .
   git commit -m "Add guide: GuideName"
   ```

5. Push to your fork:
   ```bash
   git push origin add-guide-name
   ```

6. Create a Pull Request to the main repository

### Reporting Bugs or Suggesting Features

- Use the GitHub Issues section to report bugs or suggest features
- Provide detailed information about the bug or feature request
- For bugs, include steps to reproduce, expected behavior, and actual behavior

## Code Style and Guidelines

- Follow the existing code style of the project
- Use meaningful commit messages
- Write clear comments and documentation
- Test your changes before submitting a pull request

## Pull Request Process

1. Ensure your code follows the project's style and guidelines
2. Update documentation if necessary
3. Include a clear description of the changes in your pull request
4. Reference any related issues in your pull request

## Code of Conduct

- Be respectful and inclusive in your interactions
- Give credit to original authors when appropriate
- Help others who are contributing to the project

Thank you for contributing to Root Things! Your efforts help make Android rooting more accessible and user-friendly for everyone. 