import fs from 'fs';
import path from 'path';

const componentsDir = './src/components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

const mappings = {
  'FiSun': 'FaSun',
  'FiMoon': 'FaMoon',
  'FiMenu': 'FaBars',
  'FiX': 'FaTimes',
  'FiGithub': 'FaGithub',
  'FiFileText': 'FaFileAlt',
  'FiArrowDown': 'FaArrowDown',
  'FiMail': 'FaEnvelope',
  'FiLinkedin': 'FaLinkedin',
  'FiExternalLink': 'FaExternalLinkAlt',
  'FiAward': 'FaAward',
  'FiTrendingUp': 'FaChartLine',
  'FiCheckCircle': 'FaCheckCircle',
  'FiSend': 'FaPaperPlane',
  'FiMapPin': 'FaMapMarkerAlt'
};

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('react-icons/fi')) {
    // Replace the import
    content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]react-icons\/fi['"];/g, (match, p1) => {
      const icons = p1.split(',').map(i => i.trim());
      const newIcons = icons.map(i => mappings[i] || i);
      return `import { ${newIcons.join(', ')} } from 'react-icons/fa';`;
    });

    // Replace usage
    Object.keys(mappings).forEach(fi => {
      const regex = new RegExp(`<${fi}(\\s|>)`, 'g');
      content = content.replace(regex, `<${mappings[fi]}$1`);
    });

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
