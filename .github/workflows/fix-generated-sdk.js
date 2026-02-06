/**
 * Post-processor for OpenAPI Generator TypeScript output
 * Fixes invalid TypeScript caused by + characters in OpenAPI schema names
 * 
 * Usage: node fix-generated-sdk.js [models-directory]
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('node:fs');

// Configuration
const MODELS_DIR = process.argv[2] || './models';
const API_DIR = process.argv[3] || './api';

console.log('🔧 Fixing OpenAPI Generated TypeScript Files\n');

/**
 * Fix files in a directory
 */
function fixDirectory(directory, label) {
  if (!fs.existsSync(directory)) {
    console.log(`⚠️  ${label} directory not found: ${directory}`);
    console.log(`   Skipping...\n`);
    return { renamed: 0, fixed: 0 };
  }

  console.log(`📁 Processing ${label}: ${directory}`);
  
  let filesRenamed = 0;
  let filesFixed = 0;

  // Step 1: Rename files with spaces to use hyphens
  const filesToRename = glob.sync(`${directory}/*[ ]*.ts`);
  
  if (filesToRename.length > 0) {
    console.log(`\n  📝 Renaming ${filesToRename.length} file(s) with spaces...`);
    filesToRename.forEach(file => {
      const newFile = file.replace(/\s+/g, '-');
      const oldName = path.basename(file);
      const newName = path.basename(newFile);
      
      if (oldName !== newName) {
        console.log(`     ${oldName} → ${newName}`);
        fs.renameSync(file, newFile);
        filesRenamed++;
      }
    });
  }

  // Step 2: Fix content in all TypeScript files
  const allFiles = glob.sync(`${directory}/*.ts`);
  
  if (allFiles.length > 0) {
    console.log(`\n  🔨 Fixing content in ${allFiles.length} TypeScript file(s)...`);
    
    allFiles.forEach(file => {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;

      // Fix 1: Import paths - replace spaces with hyphens
      content = content.replace(/from ['"]\.\/([^'"]+)['"]/g, (match, importPath) => {
        const fixedPath = importPath.replace(/\s+/g, '-');
        if (importPath !== fixedPath) {
          return `from './${fixedPath}'`;
        }
        return match;
      });

      // Fix 2: Type names - remove all spaces from PascalCase type identifiers
      // Matches patterns like "IdentityApiUserV1AddSectionBulkRequest Types SectionDto"
      content = content.replace(/\b([A-Z][a-zA-Z0-9]*(?:\s+[A-Z][a-zA-Z0-9]*)+)\b/g, (match) => {
        return match.replace(/\s+/g, '');
      });

      // Save if changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        filesFixed++;
      }
    });
  }

  return { renamed: filesRenamed, fixed: filesFixed };
}

// Process models directory
const modelsResult = fixDirectory(MODELS_DIR, 'Models');

// Process api directory (optional, in case API files reference the broken types)
const apiResult = fixDirectory(API_DIR, 'API');

// Summary
console.log('\n' + '='.repeat(50));
console.log('✅ Post-processing complete!\n');
console.log('Summary:');
console.log(`  Models - ${modelsResult.renamed} files renamed, ${modelsResult.fixed} files fixed`);
console.log(`  API    - ${apiResult.renamed} files renamed, ${apiResult.fixed} files fixed`);
console.log('='.repeat(50) + '\n');

const totalChanges = modelsResult.renamed + modelsResult.fixed + apiResult.renamed + apiResult.fixed;

if (totalChanges === 0) {
  console.log('ℹ️  No issues found - files are already valid!\n');
} else {
  console.log(`🎉 Fixed ${totalChanges} issue(s) in generated files\n`);
}

process.exit(0);