import React, { useState, useRef, useEffect } from 'react'
import { wrapFieldsWithMeta } from 'tinacms'
import * as Icons from 'react-Icons/pi'
import { useVirtualizer } from '@tanstack/react-virtual'

const IconComponent = wrapFieldsWithMeta((props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [containerWidth, setContainerWidth] = useState(0)
  const iconName = props.input.value as unknown as keyof typeof Icons

  const iconSize = 50 // Size of each icon box
  const gapSize = 10 // Gap between items

  const parentRef = useRef<HTMLDivElement>(null)

  const filteredIcons = Object.keys(Icons).filter((iconKey) =>
    iconKey.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const itemsPerRow = Math.max(
    1,
    Math.floor((containerWidth + gapSize) / (iconSize + gapSize))
  )

  const totalRows = Math.ceil(filteredIcons.length / itemsPerRow)

  const rowVirtualizer = useVirtualizer({
    count: totalRows,
    getScrollElement: () => parentRef.current,
    estimateSize: () => iconSize + gapSize,
    overscan: 5,
  })

  useEffect(() => {
    const updateWidth = () => {
      if (parentRef.current) {
        setContainerWidth(parentRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const handleIconSelect = (name: keyof typeof Icons) => {
    props.input.onChange(name)
  }

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <strong>Selected Icon:</strong>{' '}
        {iconName ? React.createElement(Icons[iconName], { size: 24 }) : 'None'}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search Icons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        />
      </div>

      <div
        ref={parentRef}
        style={{
          maxHeight: '300px',
          overflowY: 'auto',
          border: '1px solid #ddd',
          padding: '10px',
          borderRadius: '4px',
          position: 'relative',
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const startIndex = virtualRow.index * itemsPerRow
            const endIndex = Math.min(
              startIndex + itemsPerRow,
              filteredIcons.length
            )

            return (
              <div
                key={virtualRow.key}
                style={{
                  position: 'absolute',
                  top: `${virtualRow.start}px`,
                  left: 0,
                  display: 'flex',
                  gap: `${gapSize}px`,
                }}
              >
                {filteredIcons.slice(startIndex, endIndex).map((iconKey) => {
                  const Icon = Icons[iconKey as keyof typeof Icons]
                  const isSelected = iconKey === iconName
                  return (
                    <div
                      key={iconKey}
                      onClick={() =>
                        handleIconSelect(iconKey as keyof typeof Icons)
                      }
                      style={{
                        cursor: 'pointer',
                        padding: '5px',
                        border: isSelected
                          ? '2px solid blue'
                          : '2px solid transparent',
                        borderRadius: '4px',
                        textAlign: 'center',
                        width: `${iconSize}px`,
                        height: `${iconSize}px`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={24} />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
})

export default IconComponent
