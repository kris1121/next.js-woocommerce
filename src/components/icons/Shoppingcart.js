import * as React from "react";

function SvgShoppingcart(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={30}
      viewBox="0 0 402.238 325.351"
      {...props}
    >
      <defs>
        <filter
          height={1.5}
          width={1.5}
          y={-0.25}
          x={-0.25}
          id="shoppingcart_svg__b"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={4} result="result1" />
          <feComposite
            in="result1"
            in2="result1"
            result="result4"
            operator="in"
          />
          <feGaussianBlur stdDeviation={2} result="result6" in="result4" />
          <feComposite
            operator="xor"
            in="result6"
            in2="result4"
            result="result8"
          />
          <feComposite
            operator="atop"
            result="fbSourceGraphic"
            in="result4"
            in2="result8"
          />
          <feSpecularLighting
            specularExponent={10}
            specularConstant={1.3}
            surfaceScale={3}
            lightingColor="#fff"
            result="result1"
            in="fbSourceGraphic"
          >
            <feDistantLight azimuth={235} elevation={55} />
          </feSpecularLighting>
          <feComposite
            operator="atop"
            result="result2"
            in="result1"
            in2="fbSourceGraphic"
          />
          <feComposite
            k3={1}
            k2={1}
            operator="arithmetic"
            result="result4"
            in="fbSourceGraphic"
            in2="result2"
          />
          <feComposite in="result4" in2="SourceGraphic" />
          <feBlend mode="multiply" in2="result2" />
        </filter>
        <filter
          id="shoppingcart_svg__c"
          x={-0.021}
          width={1.041}
          y={-0.029}
          height={1.058}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={1.78} />
        </filter>
        <filter
          id="shoppingcart_svg__d"
          x={-0.015}
          width={1.029}
          y={-0.066}
          height={1.131}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={1.64} />
        </filter>
        <filter
          id="shoppingcart_svg__a"
          x={-0.048}
          width={1.097}
          y={-7.04}
          height={15.08}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={8.8} />
        </filter>
      </defs>
      <g transform="translate(312.969 -310.36)">
        <path
          d="M-365 609.362H72v-3"
          transform="matrix(.76884 0 0 1.23113 -16.102 -140.498)"
          fill="none"
          stroke="#000"
          strokeWidth={6}
          filter="url(#shoppingcart_svg__a)"
        />
        <path
          d="M-260 536.948l20 8 218-4 10-10"
          fill="none"
          stroke="#000"
          strokeWidth={3}
          strokeLinecap="round"
        />
        <path
          d="M-40 312.362l22 98h58c1.667-4 1.667-5.333 0-8h-54l-20-90c-3.236-2.473-4.736-1.472-6 0z"
          fill="navy"
          fillRule="evenodd"
          stroke="#000"
        />
        <path
          d="M-300 342.362l20 140H10l30-150z"
          fill="none"
          stroke="#4d4d4d"
          strokeWidth={3}
          strokeLinejoin="bevel"
        />
        <path
          d="M-296.707 352.362H36M34 362.362h-330M-294.354 372.362H32M-293.414 382.362H30M-292.121 392.362H28M-290 402.362H26M-290 412.362H24M-288.94 422.362H22M-287.172 432.362H20M-285.414 442.362H20h-2M-284 452.362H16M-282 462.362H14M-282 472.362H12M-298.707 342.362H38"
          fill="none"
          stroke="gray"
          strokeWidth={0.75}
        />
        <path
          d="M-160 482.362c-1.94 3.84-3.928 8.152 0 10H0l-8 50-252 4c-4.23 1.201-5.29 7.189 0 10l262-4 8-60c5.665-.224 9.957-2.28 10-10l30-140h30c.962-4.356.925-7.526 0-10H40l-30 150z"
          fill="#ccc"
          fillRule="evenodd"
          stroke="#000"
        />
        <path
          d="M52.042 332.404v9.917h33.513c3.118-2.072 5.215-4.969 0-9.917z"
          fill="red"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={1.083}
        />
        <path
          d="M-280 342.362v130M-270 342.362v140M-260 342.362v140M-250 342.362v140M-240 340.362v142M-230 340.362v142M-220 340.362v142M-210 340.362v142M-200 340.362v142M-190 338.362v144M-180 338.362v144M-170 338.362v144M-160 338.362v144M-150 338.362v144M-140 338.362v144M-130 338.362v144M-120 338.362v144M-110 336.362v146M-100 336.362v146M-90 336.362v146M-80 336.362v146M-70 336.362v146M-60 336.362v146M-50 334.362v148M-40 334.362v148M-30 332.362v150M-20 333.612v148.75M-10 332.362v150M0 332.362v150M10 332.362v150M20 332.362v90M30 332.362v40M-290 342.362v60"
          fill="none"
          stroke="gray"
          strokeWidth={0.75}
        />
        <g transform="translate(0 -10.11)">
          <circle r={18.75} cy={593.362} cx={-241} />
          <circle
            r={14.063}
            cx={-241}
            cy={593.362}
            fill="#ccc"
            filter="url(#shoppingcart_svg__b)"
          />
        </g>
        <path
          d="M-245.978 556.384h9.956v32.785h-9.956z"
          fill="#ccc"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={1.043}
        />
        <circle cx={-241} cy={583.362} r={2.5} />
        <path
          d="M-255.857 545.99v6.678l9.592 10.016h9.805l10.317-10.016v-6.678z"
          fill="#ccc"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={1.286}
        />
        <g transform="matrix(1.2179 0 0 1.2179 270.222 -142.583)">
          <circle cx={-241} cy={593.362} r={18.75} />
          <circle
            cy={593.362}
            cx={-241}
            r={14.063}
            fill="#ccc"
            filter="url(#shoppingcart_svg__b)"
          />
        </g>
        <path
          d="M-28.27 553.09h9.958v32.786h-9.957z"
          fill="#ccc"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={1.043}
        />
        <circle r={2.5} cy={580.069} cx={-23.291} />
        <path
          d="M-38.148 542.697v6.678l9.592 10.016h9.805l10.317-10.016v-6.678z"
          fill="#ccc"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={1.286}
        />
        <path
          d="M40 332.362l-30 152h-170"
          fill="none"
          stroke="gray"
          strokeWidth={0.75}
        />
        <path
          d="M48 342.362l-30 140c-.409 4.924-3.855 6.812-8 8h-170"
          fill="none"
          stroke="#666"
          strokeWidth={2}
          strokeLinecap="round"
          filter="url(#shoppingcart_svg__c)"
        />
        <path d="M1.293 492.362l-7.293 52-254 4" fill="none" stroke="#fff" />
        <path
          d="M8 492.362l-8 58-258 2"
          fill="none"
          stroke="#4d4d4d"
          strokeWidth={2}
          filter="url(#shoppingcart_svg__d)"
        />
        <path
          d="M42 333.655h44"
          fill="none"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M-298.172 340.602h18.357l-7.168 14.446-11.773 8-3.95-14.374c-.842-6.856-2.11-8.072 4.534-8.072z"
          fill="#ccc"
          fillRule="evenodd"
          stroke="#000"
        />
      </g>
    </svg>
  );
}

export default SvgShoppingcart;
