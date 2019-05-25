export default (props) => (
  <h2>
    {props.children}
    
    <style jsx>{`
      h2 {
        font-size: 1.65em;
        margin-top: 24px;
        margin-bottom: 16px;
      }
    `}</style>
  </h2>
)