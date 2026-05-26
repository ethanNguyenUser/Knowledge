import { Date, getDate, getModifiedDate } from "./Date"
import { QuartzPluginData } from "../plugins/vfile"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"
import { estimateReadingTime } from "../util/readingTime"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

function isBlogPage(fileData: QuartzPluginData): boolean {
  const slug = fileData.slug ?? ""
  if (/^blog\//i.test(slug)) return true

  const tags = fileData.frontmatter?.tags
  if (!tags) return false
  const tagList = Array.isArray(tags) ? tags : [tags]
  return tagList.some((tag) => String(tag).toLowerCase() === "blog")
}

function isSameCalendarDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      const publishedDate = getDate(cfg, fileData)
      if (publishedDate) {
        segments.push(<Date date={publishedDate} locale={cfg.locale} />)
      }

      if (isBlogPage(fileData)) {
        const modifiedDate = getModifiedDate(fileData)
        if (
          modifiedDate &&
          publishedDate &&
          !isSameCalendarDay(modifiedDate, publishedDate)
        ) {
          segments.push(
            <span class="content-meta-updated">
              Updated <Date date={modifiedDate} locale={cfg.locale} />
            </span>,
          )
        }
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes } = estimateReadingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
