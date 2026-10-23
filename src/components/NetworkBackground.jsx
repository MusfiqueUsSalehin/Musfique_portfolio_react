import React, { useEffect, useRef } from 'react'

const NetworkBackground = ({ count = 45, linkDistance = 140 }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let nodes = []
    let raf = 0
    let visible = true

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const total = width < 768 ? Math.round(count / 2) : count
      nodes = Array.from({ length: total }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx
          n.y += n.vy
        }
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < linkDistance) {
            ctx.strokeStyle = `rgba(203, 254, 0, ${(1 - dist / linkDistance) * 0.25})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = 'rgba(203, 254, 0, 0.6)'
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2)
        ctx.fill()
      }

      if (visible && !reduceMotion) raf = requestAnimationFrame(draw)
    }

    init()
    draw()

    // Rebuild only when the width changes (avoids reshuffling when the mobile address bar moves)
    let lastWidth = width
    const onResize = () => {
      if (canvas.clientWidth !== lastWidth) {
        lastWidth = canvas.clientWidth
        init()
        draw()
      }
    }
    window.addEventListener('resize', onResize)

    // Stop drawing when the hero is scrolled out of view
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !reduceMotion) {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(draw)
      }
    })
    observer.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      observer.disconnect()
    }
  }, [count, linkDistance])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

export default NetworkBackground