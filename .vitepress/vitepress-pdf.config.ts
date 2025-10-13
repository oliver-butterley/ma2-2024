import { defineUserConfig } from 'vitepress-export-pdf'

export default defineUserConfig({
  // Output file name
  outFile: 'MA2-2025.pdf',

  // Output directory
  outDir: 'pdf',

  // Route patterns - specify which pages to include (only parts 2-6)
  // Patterns are relative to source directory, not including base path
  routePatterns: [
    '/pages/part2',
    '/pages/part3',
    '/pages/part4',
    '/pages/part5',
    '/pages/part6',
  ],

  // PDF generation options
  pdfOptions: {
    // Page format
    format: 'A4',

    // Page margins
    margin: {
      top: '20mm',
      right: '15mm',
      bottom: '20mm',
      left: '15mm',
    },

    // Print background graphics
    printBackground: true,

    // Display header and footer
    displayHeaderFooter: false,
  },

  // Enable PDF outlines/bookmarks for navigation
  pdfOutlines: true,

  // Sort URLs - you can customize page order here
  sorter: (a: string, b: string) => {
    // Ensure we have strings
    const strA = String(a)
    const strB = String(b)

    // Define custom order (parts 2-6 in sequence)
    const order = [
      '/pages/part2',
      '/pages/part3',
      '/pages/part4',
      '/pages/part5',
      '/pages/part6',
    ]

    const indexA = order.indexOf(strA)
    const indexB = order.indexOf(strB)

    // If both found in order array, sort by position
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB
    }

    // If only one found, prioritize it
    if (indexA !== -1) return -1
    if (indexB !== -1) return 1

    // Otherwise use alphabetical
    return strA.localeCompare(strB)
  },
})
