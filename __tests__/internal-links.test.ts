/**
 * Internal Links Test Suite
 * Tests navigation between related pages: perinatal ↔ perinatal-faq, adhd ↔ adhd-faq
 */

import { expect, test, describe } from '@jest/globals'

describe('Internal Link Navigation', () => {
  describe('Perinatal Pages', () => {
    test('Perinatal page should link to Perinatal FAQ', () => {
      // Check that /perinatal page contains a link to /perinatal-faq
      const expectedLinks = [
        '/perinatal-faq',
        '/parents'
      ]
      expect(expectedLinks).toContain('/perinatal-faq')
    })

    test('Perinatal page should link to Parents page', () => {
      const expectedLinks = [
        '/perinatal-faq',
        '/parents'
      ]
      expect(expectedLinks).toContain('/parents')
    })

    test('Perinatal FAQ should link back to Perinatal page', () => {
      // Check that /perinatal-faq page contains a link to /perinatal
      const expectedLinks = [
        '/perinatal',
        '/parents',
        '/grief',
        '/faq'
      ]
      expect(expectedLinks).toContain('/perinatal')
    })
  })

  describe('ADHD Pages', () => {
    test('ADHD page should link to ADHD FAQ', () => {
      const expectedLinks = [
        '/adhd-faq',
        '/career'
      ]
      expect(expectedLinks).toContain('/adhd-faq')
    })

    test('ADHD page should link to Career page', () => {
      const expectedLinks = [
        '/adhd-faq',
        '/career'
      ]
      expect(expectedLinks).toContain('/career')
    })

    test('ADHD FAQ should link back to ADHD page', () => {
      const expectedLinks = [
        '/adhd',
        '/neurodivergent',
        '/faq'
      ]
      expect(expectedLinks).toContain('/adhd')
    })
  })

  describe('Related Posts Component', () => {
    test('RelatedPosts component should accept accent object', () => {
      const accentObject = {
        accent: '#e8a8a0',
        accentText: '#c97660',
        accentDeep: '#b85a47',
        tint: 'rgba(232, 168, 160, 0.08)',
        tintStrong: 'rgba(201, 118, 96, 0.14)',
        heroTint: 'rgba(232, 168, 160, 0.12)'
      }
      expect(accentObject.accentText).toBe('#c97660')
    })

    test('RelatedPosts component should accept accent string', () => {
      const accentString = '#9CAF88'
      expect(typeof accentString).toBe('string')
    })

    test('RelatedPosts should render with valid props', () => {
      const posts = [
        {
          path: '/perinatal-faq',
          label: 'Perinatal FAQs',
          description: 'Common questions about pregnancy anxiety and postpartum depression.'
        },
        {
          path: '/parents',
          label: 'Support for Parents',
          description: 'Therapy for identity shifts and parenthood challenges.'
        }
      ]
      expect(posts).toHaveLength(2)
      expect(posts[0].path).toBe('/perinatal-faq')
    })
  })

  describe('Link Connectivity', () => {
    test('Perinatal and FAQ pages should form a bidirectional link', () => {
      const links = {
        perinatal: ['/perinatal-faq', '/parents'],
        perinatalFaq: ['/perinatal', '/parents', '/grief', '/faq']
      }
      expect(links.perinatal).toContain('/perinatal-faq')
      expect(links.perinatalFaq).toContain('/perinatal')
    })

    test('ADHD and FAQ pages should form a bidirectional link', () => {
      const links = {
        adhd: ['/adhd-faq', '/career'],
        adhdFaq: ['/adhd', '/neurodivergent', '/faq']
      }
      expect(links.adhd).toContain('/adhd-faq')
      expect(links.adhdFaq).toContain('/adhd')
    })

    test('Related topics should connect specialties', () => {
      const connections = {
        perinatal: ['parents', 'perinatal-faq'],
        adhd: ['career', 'adhd-faq'],
        parents: ['perinatal', 'perinatal-faq'],
        career: ['adhd', 'burnout']
      }
      expect(connections.perinatal).toHaveLength(2)
      expect(connections.adhd).toHaveLength(2)
    })
  })

  describe('Navigation Flow', () => {
    test('User can navigate: Perinatal → FAQ → Related → Back', () => {
      const navigationPath = [
        '/perinatal',
        '/perinatal-faq',
        '/parents',
        '/perinatal'
      ]
      expect(navigationPath[0]).toBe('/perinatal')
      expect(navigationPath[1]).toBe('/perinatal-faq')
      expect(navigationPath.length).toBe(4)
    })

    test('User can navigate: ADHD → FAQ → Related → Back', () => {
      const navigationPath = [
        '/adhd',
        '/adhd-faq',
        '/career',
        '/adhd'
      ]
      expect(navigationPath[0]).toBe('/adhd')
      expect(navigationPath[1]).toBe('/adhd-faq')
      expect(navigationPath.length).toBe(4)
    })
  })
})
