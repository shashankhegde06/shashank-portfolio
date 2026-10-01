import { ImageResponse } from 'next/og'

export const alt = 'Shashank Hegde | Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          backgroundColor: '#171613',
          color: '#f4f1eb',
          padding: '68px 76px',
          fontFamily: 'sans-serif'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 1
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#e87565', fontSize: 18, fontWeight: 700, letterSpacing: 4 }}>
            <span style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#d84234' }} />
            SH / SOFTWARE ENGINEER
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', fontSize: 88, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>
              <span>Shashank </span><span style={{ color: '#e35445' }}>Hegde</span>
            </div>
            <div style={{ display: 'flex', color: '#d4cec3', fontSize: 30 }}>
              Software Engineer / C# .NET / Healthcare Technology
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#aaa49a', fontSize: 20, letterSpacing: 2 }}>
            BENGALURU, INDIA <span style={{ color: '#e35445' }}>·</span> PORTFOLIO
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            right: -26,
            top: 70,
            color: 'rgba(227,84,69,0.08)',
            fontSize: 500,
            fontWeight: 800,
            letterSpacing: -45,
            lineHeight: 1
          }}
        >
          SH
        </div>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            height: 12,
            backgroundColor: '#d84234'
          }}
        />
      </div>
    ),
    { ...size }
  )
}
