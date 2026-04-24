import useScrollReveal from '../hooks/useScrollReveal.js'

const VIDEOS = [
  {
    id:    'dQw4w9WgXcQ',
    title: 'TikTok Ads Case Study — Trung Tâm Tiếng Anh',
    tags:  ['TALKING HEAD', 'PERFORMANCE'],
    desc:  'Video quảng cáo dạng nói chuyện trực tiếp. CPL tối ưu từ 180K → 62K trong 14 ngày.',
  },
  {
    id:    'dQw4w9WgXcQ',
    title: 'Cinematic Brand Film — Edify Studio',
    tags:  ['CINEMATIC', '4K'],
    desc:  'Brand film 90 giây. Quay 1 buổi, sản xuất chuẩn điện ảnh, đa mục đích dùng cả năm.',
  },
  {
    id:    'dQw4w9WgXcQ',
    title: 'Short Viral — Sản Phẩm F&B Bình Thuận',
    tags:  ['SHORT VIRAL', 'ORGANIC'],
    desc:  '15 video ngắn, 1 buổi quay. Kênh TikTok đạt 2M views tự nhiên trong 30 ngày.',
  },
  {
    id:    'dQw4w9WgXcQ',
    title: 'Reels Edu-Content — AI Filmmaking Masterclass',
    tags:  ['REELS', 'EDU'],
    desc:  'Series 12 video cho khoá học AI. Tỷ lệ hoàn thành video đạt 78% (benchmark: 45%).',
  },
]

function VideoRow({ video, reverse }) {
  const videoEl = (
    <div className="reveal relative overflow-hidden"
         style={{ aspectRatio: '16/9',
                  boxShadow: reverse
                    ? '-12px 12px 0px rgba(182,196,182,0.12)'
                    : '12px 12px 0px rgba(182,196,182,0.12)' }}>
      <iframe
        src={`https://www.youtube.com/embed/${video.id}?rel=0`}
        title={video.title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: 'none' }}
      />
    </div>
  )

  const textEl = (
    <div className="reveal flex flex-col justify-center">
      <div className="flex flex-wrap gap-2 mb-5">
        {video.tags.map((t) => (
          <span key={t} style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
                                  letterSpacing: '0.2em', color: '#B6C4B6',
                                  border: '1px solid rgba(182,196,182,0.25)',
                                  padding: '4px 10px', textTransform: 'uppercase' }}>
            {t}
          </span>
        ))}
      </div>
      <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 'clamp(18px, 2.5vw, 26px)',
                   letterSpacing: '-0.02em', color: '#EEF0E5', textTransform: 'uppercase',
                   lineHeight: 1.1, marginBottom: 16 }}>
        {video.title}
      </h3>
      <p style={{ fontFamily: 'Montserrat', fontWeight: 400, fontSize: 13,
                  color: 'rgba(238,240,229,0.55)', lineHeight: 1.65 }}>
        {video.desc}
      </p>
    </div>
  )

  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 lg:py-16`}
         style={{ borderBottom: '1px solid rgba(182,196,182,0.08)' }}>
      {reverse ? <>{textEl}{videoEl}</> : <>{videoEl}{textEl}</>}
    </div>
  )
}

export default function Portfolio() {
  useScrollReveal()

  return (
    <section id="portfolio" style={{ backgroundColor: '#163020', padding: '0 24px' }}>
      <div className="max-w-[1280px] mx-auto py-20 lg:py-28">
        <div className="reveal mb-14">
          <span style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
                         letterSpacing: '0.22em', color: '#B6C4B6', textTransform: 'uppercase' }}>
            PORTFOLIO
          </span>
          <h2 className="mt-4" style={{ fontFamily: 'Montserrat', fontWeight: 900,
                                        fontSize: 'clamp(28px, 4vw, 52px)',
                                        letterSpacing: '-0.03em', color: '#EEF0E5',
                                        textTransform: 'uppercase', lineHeight: 1 }}>
            KẾT QUẢ THẬT.<br />
            <span style={{ color: '#B6C4B6' }}>SỐ LIỆU THẬT.</span>
          </h2>
        </div>

        {VIDEOS.map((v, i) => (
          <VideoRow key={v.id + i} video={v} reverse={i % 2 !== 0} />
        ))}
      </div>
    </section>
  )
}
