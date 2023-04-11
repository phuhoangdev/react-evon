const CardTailwind = (props) => {
   const amountClasses = `text-lg font-bold text-transparent bg-clip-text ${props.primary ? 'bg-primary-gradient' : 'bg-secondary-gradient'}`;

   return (
      <div className="relative">
         <div className="w-full rounded-lg h-[400px]">
            <img
               className="block w-full h-full object-cover rounded-lg"
               src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=768x576&vertical=top"
               alt=""
            />
         </div>
         <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
            <div className="flex justify-between items-center mb-8">
               <div className="flex items-center gap-x-3">
                  <img
                     className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                     src="https://cdn.dribbble.com/users/2400293/avatars/small/d96fe84e413ef11b9a219a84158a739a.jpg?1573205144"
                     alt="avatar"
                  />
                  <span className="font-light text-base text-[#333]">Racheliz</span>
               </div>
               <div className="flex items-center gap-x-3">
                  <svg fill="#f01d1d" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                     <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                  </svg>{' '}
                  <span>256</span>
               </div>
            </div>
            <div className="flex items-center justify-between">
               <div className={`text-lg font-medium ${props.fontSize || 'text-lg'}`}>Cosmic Perspective</div>
               <span className={amountClasses}>12,000 PSL</span>
            </div>
         </div>
      </div>
   );
};

export default CardTailwind;
