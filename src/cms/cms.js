import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import BlogsPagePreview from './preview-templates/BlogsPagePreview'
import VideosPagePreview from './preview-templates/VideosPagePreview'
import PodcastsPagePreview from './preview-templates/PodcastsPagePreview'
import SocialsPagePreview from './preview-templates/SocialsPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('videos', BlogsPagePreview)
CMS.registerPreviewTemplate('videos', VideosPagePreview)
CMS.registerPreviewTemplate('podcasts', PodcastsPagePreview)
CMS.registerPreviewTemplate('podcasts', SocialsPagePreview)
