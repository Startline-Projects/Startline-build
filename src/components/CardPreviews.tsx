export function StaffVAPreview() {
  return (
    <div style={{ background: '#1C1B1A', width: '100%', height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ background: '#242220', borderRadius: '4px', height: '10px', width: '100%' }} />
      {[1,2,3].map(i => (
        <div key={i} style={{ background: '#242220', borderRadius: '6px', padding: '6px 8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#FE6E3E', opacity: 0.8, flexShrink: 0 }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ background: '#363330', borderRadius: '2px', height: '4px', width: '70%' }} />
            <div style={{ background: '#2E2C2A', borderRadius: '2px', height: '3px', width: '45%' }} />
          </div>
          <div style={{ background: '#FE6E3E', borderRadius: '3px', height: '4px', width: '20px', opacity: 0.7 }} />
        </div>
      ))}
    </div>
  )
}

export function InterviewPreview() {
  return (
    <div style={{ background: '#0a1520', width: '100%', height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', gap: '7px', justifyContent: 'center' }}>
      <div style={{ background: '#112240', borderRadius: '0 8px 8px 8px', padding: '5px 8px', maxWidth: '75%' }}>
        <div style={{ background: '#1E3A5F', borderRadius: '2px', height: '3px', width: '100%', marginBottom: '3px' }} />
        <div style={{ background: '#1E3A5F', borderRadius: '2px', height: '3px', width: '65%' }} />
      </div>
      <div style={{ background: '#1a2e4a', borderRadius: '8px 0 8px 8px', padding: '5px 8px', maxWidth: '65%', alignSelf: 'flex-end' }}>
        <div style={{ background: '#2563EB', borderRadius: '2px', height: '3px', width: '100%', opacity: 0.6 }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', justifyContent: 'center', marginTop: '4px' }}>
        {[4,7,5,9,6,8,4,7,5,6,8,5].map((h, i) => (
          <div key={i} style={{ width: '3px', height: `${h}px`, background: '#2563EB', borderRadius: '2px', opacity: 0.7 }} />
        ))}
      </div>
    </div>
  )
}

export function EstateVaultPreview() {
  return (
    <div style={{ background: '#EFF6FF', width: '100%', height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ background: '#1D4ED8', borderRadius: '4px', height: '10px', width: '100%', opacity: 0.9 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', flex: 1 }}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{ background: '#fff', borderRadius: '6px', padding: '6px', border: '1px solid #DBEAFE', display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ background: '#BFDBFE', borderRadius: '2px', height: '4px', width: '60%' }} />
            <div style={{ background: '#EFF6FF', borderRadius: '2px', height: '3px', width: '80%' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function PeoplesFirmPreview() {
  return (
    <div style={{ background: '#0D1F0F', width: '100%', height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ background: '#1A3A1C', borderRadius: '4px', height: '12px', width: '100%', display: 'flex', alignItems: 'center', padding: '0 6px' }}>
        <div style={{ background: '#4ADE80', borderRadius: '2px', height: '4px', width: '40%', opacity: 0.7 }} />
      </div>
      <div style={{ background: '#1A3A1C', borderRadius: '6px', padding: '8px', flex: 1 }}>
        <div style={{ background: '#2D5A30', borderRadius: '2px', height: '4px', width: '55%', marginBottom: '5px' }} />
        <div style={{ background: '#243E26', borderRadius: '2px', height: '3px', width: '90%', marginBottom: '3px' }} />
        <div style={{ background: '#243E26', borderRadius: '2px', height: '3px', width: '75%', marginBottom: '3px' }} />
        <div style={{ background: '#243E26', borderRadius: '2px', height: '3px', width: '60%' }} />
      </div>
    </div>
  )
}

export function MetaHealthPreview() {
  return (
    <div style={{ background: '#0A0F1A', width: '100%', height: '100%', padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ background: '#1E3A5F', borderRadius: '3px', height: '8px', width: '45%' }} />
        <div style={{ background: '#059669', borderRadius: '10px', height: '6px', width: '20%', opacity: 0.8 }} />
      </div>
      <div style={{ background: '#121A2E', borderRadius: '6px', padding: '6px 8px', flex: 1 }}>
        <div style={{ background: '#1E3A5F', borderRadius: '2px', height: '4px', width: '60%', marginBottom: '4px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '4px' }}>
          {[3,6,4,8,5,7,3,6,5,8,4].map((h,i) => (
            <div key={i} style={{ width: '3px', height: `${h}px`, background: '#2563EB', borderRadius: '1px', opacity: 0.8 }} />
          ))}
        </div>
        <div style={{ background: '#1A2440', borderRadius: '2px', height: '3px', width: '80%' }} />
        <div style={{ background: '#1A2440', borderRadius: '2px', height: '3px', width: '65%', marginTop: '3px' }} />
      </div>
    </div>
  )
}

export function AlHikmaPreview() {
  return (
    <div style={{ background: '#0B2545', width: '100%', height: '100%', padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div style={{ background: '#B8921A', borderRadius: '4px', height: '8px', width: '100%', opacity: 0.9 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4px', flex: 1 }}>
        {[1,2,3,4,5,6].map(i => (
          <div key={i} style={{ background: '#112D57', borderRadius: '5px', display: 'flex', flexDirection: 'column', gap: '3px', padding: '5px' }}>
            <div style={{ background: '#B8921A', borderRadius: '2px', height: '4px', width: '70%', opacity: 0.7 }} />
            <div style={{ background: '#1A3A6A', borderRadius: '2px', height: '3px', width: '90%' }} />
            <div style={{ background: '#1A3A6A', borderRadius: '2px', height: '3px', width: '60%' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ChairlyPreview() {
  return (
    <div style={{ background: '#0E0E0D', width: '100%', height: '100%', padding: '10px', display: 'flex', gap: '6px' }}>
      <div style={{ flex: 1, background: '#1A1816', borderRadius: '6px', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ background: '#C8A84B', borderRadius: '2px', height: '4px', width: '60%', opacity: 0.8 }} />
        {[1,2,3].map(i => (
          <div key={i} style={{ background: '#242220', borderRadius: '4px', height: '14px' }} />
        ))}
      </div>
      <div style={{ flex: 1, background: '#F8F6F2', borderRadius: '6px', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ background: '#A07820', borderRadius: '2px', height: '4px', width: '50%', opacity: 0.7 }} />
        {[1,2,3].map(i => (
          <div key={i} style={{ background: '#EDE9E2', borderRadius: '4px', height: '14px' }} />
        ))}
      </div>
    </div>
  )
}

export function MuslimGuiderPreview() {
  return (
    <div style={{ background: '#0D1117', width: '100%', height: '100%', padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div style={{ background: '#1D9E75', borderRadius: '4px', height: '8px', width: '100%', opacity: 0.85 }} />
      <div style={{ background: '#151D28', borderRadius: '6px', padding: '6px', flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
              <div style={{ background: '#1D9E75', borderRadius: '1px', height: '3px', width: '20px', opacity: i===2?1:0.4 }} />
              <div style={{ background: '#243545', borderRadius: '1px', height: '2px', width: '14px' }} />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          {[3,5,4,7,5,8,5,7,4,5,3].map((h,i) => (
            <div key={i} style={{ width: '3px', height: `${h}px`, background: '#1D9E75', borderRadius: '1px', opacity: 0.8 }} />
          ))}
        </div>
      </div>
    </div>
  )
}
