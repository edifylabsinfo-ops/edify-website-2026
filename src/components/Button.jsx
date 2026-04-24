import { ArrowRight } from 'lucide-react'

/**
 * Button — Edify Labs shared CTA
 * @param {'solid'|'outline'} variant
 * @param {string} ctaId — for tracking
 */
export default function Button({
  children,
  variant  = 'solid',
  ctaId    = 'btn',
  href,
  onClick,
  arrow    = true,
  style    = {},
  ...props
}) {
  const cls = variant === 'solid' ? 'btn-solid' : 'btn-outline'

  const track = () => {
    window.fbq?.('track', 'Lead', { content_name: ctaId })
    window.dataLayer?.push({ event: 'cta_click', cta_id: ctaId })
    onClick?.()
  }

  const inner = (
    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {children}
      {arrow && <ArrowRight size={12} />}
    </span>
  )

  if (href) {
    return (
      <a href={href} className={cls} onClick={track}
         style={{ textDecoration: 'none', ...style }} {...props}>
        {inner}
      </a>
    )
  }

  return (
    <button className={cls} onClick={track} style={style} {...props}>
      {inner}
    </button>
  )
}
