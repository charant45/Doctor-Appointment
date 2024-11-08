import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = ({ colorText = "text-gray-600" }) => {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="/img/logo.png" alt="DocAppoint Logo" className="h-20 w-20" />
            </Link>
          </div>
          <div className="mt-8 text-center">
            <p className={`${colorText} text-sm`}>
              {t('footer.copyright')} &copy; {new Date().getFullYear()} DocAppoint. {t('footer.rights')}
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${colorText} hover:text-primary transition-colors`} aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`${colorText} hover:text-primary transition-colors`} aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${colorText} hover:text-primary transition-colors`} aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${colorText} hover:text-primary transition-colors`} aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer