
# Portfolio Customization Guide

This document provides instructions for personalizing your portfolio website.

## Adding Your Photo

1. **Replace the "Photo here" placeholder**:

   To add your personal photo, follow these steps:

   1. Prepare your photo:
      - Recommended size: approximately 350px wide by 500px tall
      - File format: JPG, PNG, or WebP (WebP preferred for better performance)
      - Keep the file size below 300KB for optimal loading
      
   2. Add your photo to the project:
      - Save your image in the `public/` directory (e.g., `public/profile-photo.jpg`)
      
   3. Update the Hero component:
      - Open `src/components/Hero.tsx`
      - Locate the photo placeholder div
      - Replace the placeholder with your image:
      
      ```jsx
      {/* Replace this */}
      <div className="text-white/50 text-center p-6">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="border-2 border-dashed border-white/30 rounded-xl w-full h-full flex items-center justify-center p-4">
            <span className="font-dm-mono">Photo here</span>
          </div>
        </div>
      </div>
      
      {/* With this */}
      <img
        src="/profile-photo.jpg" 
        alt="João Teixeira"
        className="w-full h-full object-cover"
      />
      ```

## Adding a Custom Logo

1. **Creating and using a custom SVG logo**:

   To replace the "JT" text with a custom SVG logo:

   1. Create your SVG logo:
      - Keep it simple and recognizable
      - Use colors that match the site theme (#46FF8C and white are recommended)
      - Optimize your SVG file using a tool like [SVGOMG](https://jakearchibald.github.io/svgomg/)
      
   2. Add your logo to the project:
      - Save your optimized SVG in the `public/` directory (e.g., `public/logo.svg`)
      
   3. Update the Navbar component:
      - Open `src/components/Navbar.tsx`
      - Locate the logo/title section
      - Replace the text logo with your SVG:
      
      ```jsx
      {/* Replace this */}
      <div className="flex items-center">
        <span className="text-bio-accent font-dm-mono text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">JT</span>
        <span className="ml-2 text-white font-dm-mono text-lg">BioPortfolio</span>
      </div>
      
      {/* With this */}
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="h-8 w-auto hover:opacity-80 transition-opacity" />
        <span className="ml-2 text-white font-dm-mono text-lg">BioPortfolio</span>
      </div>
      ```
      
   4. Also update the Footer component:
      - Open `src/components/Footer.tsx`
      - Make similar changes to the logo section in the footer

## Customizing Social Links

Update your social media links in the Hero and Footer components:

1. Open `src/components/Hero.tsx` and `src/components/Footer.tsx`
2. Locate the social media links sections
3. Replace `username` in the href attributes with your actual usernames:

```jsx
<a
  href="https://github.com/YOUR_GITHUB_USERNAME"
  target="_blank"
  rel="noreferrer"
  className="social-icon"
  aria-label="GitHub"
>
  <Github size={20} />
</a>
<a
  href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
  target="_blank"
  rel="noreferrer"
  className="social-icon"
  aria-label="LinkedIn"
>
  <Linkedin size={20} />
</a>
```

## Customizing the Animated Background

If you want to modify the bioinformatics-themed background:

1. Open `src/components/BioinformaticsBackground.tsx`
2. Adjust the following properties to change the appearance:
   - `dnaStrands`: Change the number of DNA strands
   - `baseColors`: Modify the colors of the DNA strands
   - The `size`, `length`, and `amplitude` variables control the appearance of the DNA

## Customizing Text Content

To update the text content of your portfolio:

1. Open the translation files in `src/translations/index.ts`
2. Modify the text in both the English (`enUS`) and Portuguese (`ptBR`) objects
3. This will automatically update the text throughout the site

## Additional Customization

For more advanced customization:

1. **Colors**: Edit the color scheme in `tailwind.config.ts`
2. **Animations**: Modify animation timings in `src/index.css`
3. **Components**: Adjust individual component styles in their respective files

## Need More Help?

Feel free to reach out if you need additional assistance customizing your portfolio!
