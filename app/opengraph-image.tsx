import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site-config'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(45deg, #1f2937, #374151)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: '#10b981',
          fontFamily: 'monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              background: '#10b981',
              marginRight: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              color: '#000',
              fontWeight: 'bold',
            }}
          >
            🎮
          </div>
          <div style={{ fontSize: 64, fontWeight: 'bold' }}>
            {siteConfig.name}
          </div>
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#9ca3af',
            textAlign: 'center',
            maxWidth: 600,
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
